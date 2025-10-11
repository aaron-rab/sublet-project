import prisma from "../../helpers/prisma";
import { ListingService } from "../../backend-services/listing-services";

export default async function handler(req, res) {
    
    try {
        const listingService = new ListingService();
        const posts = await listingService.getAllWithUser();
        if (!posts) {
            return res.status(400).json({ message: "Something went wrong while finding posts", result: e, status: 400 })
        }
        return res.status(201).json({ posts , status: 201 });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong while trying to get posts", result: e, status: 500 })
    }
  }