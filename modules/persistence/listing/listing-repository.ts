// src/repositories/bookingRepository.ts
import type { Listing, NewListing } from "../../domain/listing/listing";
import prisma from "../../../helpers/prisma";
import { toDomainListing, toDBListing, toDBListingFromNewListing } from "./listing-type-converter";

export const listingRepository = {
  async create(listing: NewListing): Promise<Listing> {

   const created = await prisma.post.create({
      data: {
        ...toDBListingFromNewListing(listing),
      },
    });
    return toDomainListing(created);
  },
  async getAllWithUser(): Promise<Listing[]> {
    const records = await prisma.post.findMany({
      include: {
        User: {
          // Only includes email, will include name once added to schema
          select: {
            email: true,
          },
        },
      },
    });
    return records.map(toDomainListing);
  }
  // async update(listing: Listing) {
  //   await prisma.post.update({
  //     where: { id: listing.id },
  //     data: listing,
  //   });
  // },
  // async findById(id: string) {
  //   const record = await prisma.booking.findUnique({ where: { id } });
  //   if (!record) return null;

  //   // map DB record → domain object
  //   return {
  //     id: record.id,
  //     userId: record.userId,
  //     roomId: record.roomId,
  //     status: record.status as "PENDING" | "CONFIRMED" | "CANCELLED",
  //     createdAt: record.createdAt,
  //   };
  // },
};
