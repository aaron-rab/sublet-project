import prisma from "../../helpers/prisma";

export default async function handler(req, res) {
    
    try {

        const posts = await prisma.post.findMany();
        console.log("posts:", posts); 

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