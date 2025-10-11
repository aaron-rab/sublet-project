import prisma from "../../helpers/prisma";
import type { Listing, NewListing } from "../domain/listing/listing-type";
import { z } from "zod";
import { validateListingData } from "../domain/listing/listing";
import { listingRepository } from "../persistence/listing/listing-repository";

export class ListingService {
  async create(data: NewListing): Promise<Listing> {
    const listing = validateListingData(data);
    return listingRepository.create(listing);
  }

  async getAll(): Promise<Listing[]> {
    return listingRepository.getAllWithUser();
  }

  //   async isAvailable(id: string, startDate: Date, endDate: Date): Promise<boolean> {}
}
