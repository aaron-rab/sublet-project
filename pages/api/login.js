import prisma from "../../helpers/prisma";
import * as bcrypt from 'bcrypt';
import { signJwtAccessToken } from "../../helpers/jwt";

export default async function handler(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Both fields are required"}, { status: 400 })
            return
        }

        const user = await prisma.user.findFirst({
            where: { email: email.toLowerCase() }
        });

        if (!user) {
            res.status(400).json({ message: "No user found"}, { status: 400 })
            return
        }

        if (await bcrypt.compare(password, user.password)) {
            const { password: hashedPasswrod, ...result } = user;
            const accessToken = signJwtAccessToken(result);
            res.status(200).json({ result: { ...result, accessToken } , status: 200 })
            return
        }
        else {
            res.status(400).json({ message: "Password Incorrect"}, { status: 400 })
            return
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong while trying to log in", result: e }, { status: 500 })
        return
        
    }
}