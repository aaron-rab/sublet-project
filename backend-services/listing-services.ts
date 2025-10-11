import prisma from "../helpers/prisma";
import type { Listing } from "../types/listing";
import { z } from "zod";

// To validate the data coming from the front end
const CreateListingSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  rent: z.number().nonnegative("Rent must be positive"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description is too long"),
  startDate: z.iso.datetime({ offset: true }),
  endDate: z.iso.datetime({ offset: true }),
  user_id: z.number().int(),
});

export class ListingService {
  async create(data: Omit<Listing, "id">): Promise<Listing> {
    const parsed = CreateListingSchema.safeParse({
      ...data,
      startDate: data.startDate.toISOString(),
      endDate: data.endDate.toISOString(),
    });

    if (!parsed.success) {
      throw new Error(
        `Invalid data: ${parsed.error.issues.map((e) => e.message).join(", ")}`
      );
    }
    const validated = parsed.data;

    if (new Date(validated.startDate) > new Date(validated.endDate)) {
      throw new Error("Start date must be before end date");
    }

    if (
      new Date(validated.startDate) < new Date() ||
      new Date(validated.endDate) < new Date()
    ) {
      throw new Error("Start and end dates must be in the future");
    }

    return prisma.post.create({
      data: {
        title: validated.title,
        description: validated.description,
        startDate: new Date(validated.startDate),
        endDate: new Date(validated.endDate),
        rent: validated.rent,
        User: {
          connect: { id: validated.user_id },
        },
      },
    });
  }

  async getAllWithUser(): Promise<Listing[]> {
    return prisma.post.findMany({
      include: {
        User: {
          // Only includes email, will include name once added to schema
          select: {
            email: true,
          },
        },
      },
    });
  }

  //   async isAvailable(id: string, startDate: Date, endDate: Date): Promise<boolean> {}
}
