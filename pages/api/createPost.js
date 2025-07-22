import prisma from "../../helpers/prisma";
import { verifyJwt } from "../../helpers/jwt";


export default async function handler(req, res) {
  try {
    const { title, description, rent, startDate, endDate } = req.body;
    const currentDate = new Date();

    if (!title || !description || !rent || !startDate || !endDate) {
      let missingFields = [];
      if (!title) missingFields.push("title");
      if (!description) missingFields.push("description");
      if (!rent) missingFields.push("rent");
      if (!startDate) missingFields.push("startDate");
      if (!endDate) missingFields.push("endDate");
      return res.status(400).json({
        message: `Missing required field(s): ${missingFields.join(", ")}`,
        missingFields,
        status: 400,
      });
    }

    const startDateFormatted = new Date(startDate);
    const endDateFormatted = new Date(endDate);

    if (startDateFormatted > endDateFormatted || startDateFormatted < currentDate) {
      return res
        .status(400)
        .json({ message: "Start date must be before end date, and be greater than the current date", status: 400 });
    }

    const accessToken = req.headers["authorization"];
    console.log("ACCESS TOKENNN:", accessToken);
    const decoded = verifyJwt(accessToken);

    if (!accessToken || !decoded) {
      return res.status(401).json({
        message: "You are not authorized to make a post. Make sure to Login.",
        status: 401,
      });
    }

    const userId = decoded.id;

    const post = await prisma.post.create({
      data: {
        title: title,
        description: description,
        rent: parseInt(rent, 10),
        startDate: startDateFormatted,
        endDate: endDateFormatted,
        creationDate: new Date(),
        user_id: userId,
      },
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
