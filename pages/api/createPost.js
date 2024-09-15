import prisma from "../../helpers/prisma";
import { verifyJwt } from "../../helpers/jwt";

export default async function handler(req, res) {
    
    try {
        const { title, content } = req.body

        if (!title || !content) {
            res.status(400).json({ message: "Both fields are required"}, { status: 400 })
            return
        }
        
        const accessToken = req.headers['authorization']
        console.log("ACCESS TOKENNN:", accessToken)
        const decoded = verifyJwt(accessToken);

        if (!accessToken || !decoded) {
            res.status(401).json({ message: "You are not authorized to make a post. Make sure to Login." }, { status: 401 })
            return
            
        }

        const userId = decoded.id

        const post = await prisma.post.create({
            data: {
                title: title,
                content: content,
                user_id: userId
            }
        })

        res.status(201).json({ post }, { status: 201 });
        return 

    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong while trying to create a post", result: e }, { status: 500 })
        return 
    }
  }