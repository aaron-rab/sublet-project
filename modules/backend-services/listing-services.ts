import type { Listing, NewListing } from "../domain/listing/listing";
import { makeNewListingObject } from "../domain/listing/listing";
import { listingRepository } from "../persistence/listing/listing-repository";

export class ListingService {
  async create(data: unknown): Promise<Listing> {
    const listing = makeNewListingObject(data);
    return listingRepository.create(listing);
  }

  async getAll(): Promise<Listing[]> {
    return listingRepository.getAllWithUser();
  }

  //   async isAvailable(id: string, startDate: Date, endDate: Date): Promise<boolean> {}
}
