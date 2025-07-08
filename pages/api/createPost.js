import prisma from "../../helpers/prisma";
import { verifyJwt } from "../../helpers/jwt";

export default async function handler(req, res) {
    
    try {
        const { title, description, rent } = req.body

        if (!title || !description || !rent ) {
            return res.status(400).json({ message: "All fields are required", status: 400 })
        }
        
        const accessToken = req.headers['authorization']
        console.log("ACCESS TOKENNN:", accessToken)
        const decoded = verifyJwt(accessToken);

        if (!accessToken || !decoded) {
            return res.status(401).json({ message: "You are not authorized to make a post. Make sure to Login." , status: 401 })
            
        }

        const userId = decoded.id

        const post = await prisma.post.create({
            data: {
                title: title,
                description: description,
                rent: rent,
                user_id: userId
            }
        })

        return res.status(201).json({ post , status: 201 });
        
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong while trying to create a post", result: e, status: 500 })
    }
  }