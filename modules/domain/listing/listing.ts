import { z } from "zod";
import type { Listing, NewListing } from "./listing-type";

// Zod schema for validating listing data
const CreateListingSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  rent: z.number().nonnegative("Rent must be positive"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description is too long"),
  startDate: z.date(),
  endDate: z.date(),
  user_id: z.number().int(),
});

//might want to accept/return Listing | NewListing
export function validateListingData(data: NewListing): NewListing {
  const validated = CreateListingSchema.parse({ ...data });
  if (new Date(validated.startDate) > new Date(validated.endDate)) {
    throw new Error("Start date must be before end date");
  }

  if (
    new Date(validated.startDate) < new Date() ||
    new Date(validated.endDate) < new Date()
  ) {
    throw new Error("Start and end dates must be in the future");
  }
  return { ...validated };
}

// export function changeListingName(listing: Listing, newName: string): Listing {
//     // business logic
//   return { ...listing, title: newName };
// }