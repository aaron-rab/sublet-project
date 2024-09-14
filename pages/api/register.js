import prisma from "../../helpers/prisma";
import * as bcrypt from 'bcrypt';

export default async function handler(req, res) {
    
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ message: "Both fields are required"}, { status: 400 })
            return
        }

        const user = await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                password: await bcrypt.hash(password, 10)
            }
        })
        
        // seperates password from user object, and sends to client
        const { password: hashedPassword, ...result } = user;
        res.status(201).json({ result }, { status: 201 });
        return 

    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong while trying to register", result: e }, { status: 500 })
        return 
    }
  }