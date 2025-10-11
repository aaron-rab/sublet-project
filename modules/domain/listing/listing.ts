import { ListingSchema, NewListingSchema } from "./listing-value-validation";

export type Listing = {
  id: number;
  title: string;
  description: string;
  rent: number;
  startDate: Date;
  endDate: Date;
  user_id: number;
  creationDate: Date;
};

export type NewListing = Omit<Listing, "id" | "creationDate">;

export function makeListingObject(data: unknown): Listing {
  return ListingSchema.parse(data);
}

export function makeNewListingObject(data: unknown): NewListing {
  return NewListingSchema.parse(data);
}

// export function changeListingName(listing: Listing, newName: string): Listing {
//     // business logic
//   return { ...listing, title: newName };
// }
