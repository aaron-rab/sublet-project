// converts from Prisma types to domain types

import type { Post as DBListing } from "@prisma/client";
import type { Listing as DomainListing } from "../../domain/listing/listing-type";

// they seem to be the same at the moment but this might change in the future
export const toDomainListing = (dbListing: DBListing): DomainListing => {
  return {
    id: dbListing.id,
    title: dbListing.title,
    description: dbListing.description,
    rent: dbListing.rent,
    startDate: dbListing.startDate,
    endDate: dbListing.endDate,
    user_id: dbListing.user_id,
    creationDate: dbListing.creationDate,
  };
};

export const toDBListing = (domainListing: DomainListing): DBListing => {
  return {
    id: domainListing.id,
    title: domainListing.title,
    description: domainListing.description,
    rent: domainListing.rent,
    startDate: domainListing.startDate,
    endDate: domainListing.endDate,
    user_id: domainListing.user_id,
    creationDate: domainListing.creationDate,
  };
};

export const toDBListingFromNewListing = (
  domainListing: Omit<DomainListing, "id" | "creationDate">
): Omit<DBListing, "id" | "creationDate"> => {
  return {
    title: domainListing.title,
    description: domainListing.description,
    rent: domainListing.rent,
    startDate: domainListing.startDate,
    endDate: domainListing.endDate,
    user_id: domainListing.user_id,
  };
};
