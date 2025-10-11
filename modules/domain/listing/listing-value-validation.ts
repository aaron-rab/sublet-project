import { z } from "zod";

// Zod schema for validating listing data
const BaseListingSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  rent: z.number().nonnegative("Rent must be positive"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description is too long"),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  user_id: z.number().int(),
  creationDate: z.coerce.date(),
});

function dateRefinement(
  obj: { startDate: Date; endDate: Date },
  ctx: z.RefinementCtx
) {
  const now = new Date();
  if (obj.startDate > obj.endDate) {
    ctx.addIssue({
      code: "custom",
      path: ["startDate"],
      message: "Start date must be before end date",
    });
  }
  if (obj.startDate < now || obj.endDate < now) {
    ctx.addIssue({
      code: "custom",
      path: ["startDate", "endDate"],
      message: "Start and end date must be in the future",
    });
  }
}

export const ListingSchema = BaseListingSchema.superRefine(dateRefinement);
export const NewListingSchema = ListingSchema.omit({ id: true, creationDate: true });

