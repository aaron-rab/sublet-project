import prisma from "../../helpers/prisma";
import { verifyJwt } from "../../helpers/jwt";
import { ListingService } from "../../modules/backend-services/listing-services";

export default async function handler(req, res) {
  try {
    const { postData } = req.body;
    const { title, description, rent, startDate, endDate } = postData;

    const accessToken = req.headers["authorization"];
    const decoded = verifyJwt(accessToken);

    if (!accessToken || !decoded) {
      return res.status(401).json({
        message: "You are not authorized to make a post. Make sure to Login.",
        status: 401,
      });
    }

    const userId = decoded.id;

    const listingService = new ListingService();
    const post = await listingService.create({
      title,
      description,
      rent: parseInt(rent, 10),
      startDate: startDate,
      endDate: endDate,
      user_id: userId,
    });

    return res.status(201).json({ post, status: 201 });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Something went wrong while trying to create a post",
      result: e,
      status: 500,
    });
  }
}
