import prisma from "../../helpers/prisma";
import * as bcrypt from 'bcrypt';
import { signJwtAccessToken } from "../../helpers/jwt";

export default async function handler(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Both fields are required", status: 400 })
        }

        const user = await prisma.user.findFirst({
            where: { email: email.toLowerCase() }
        });

        if (!user) {
            return res.status(400).json({ message: "No user found", status: 400})
        }

        if (await bcrypt.compare(password, user.password)) {
            const { password: hashedPasswrod, ...result } = user;
            const accessToken = signJwtAccessToken(result);
            return res.status(200).json({ result: { ...result, accessToken } , status: 200 })
        }
        else {
            return res.status(400).json({ message: "Password Incorrect", status: 400 })
        }
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong while trying to log in", result: e, status: 500 })
    }
}