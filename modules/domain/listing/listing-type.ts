export type Listing = {
  id: number;
  title: string;
  description: string;
  rent: number;
  startDate: Date;
  endDate: Date;
  user_id: number;
  creationDate: Date;
}

export type NewListing = Omit<Listing, 'id' | 'creationDate'>;