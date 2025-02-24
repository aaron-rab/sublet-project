
import { verifyJwt } from "../../helpers/jwt";

export default async function handler(req, res) {
    
    try {
        
        const accessToken = req.headers['authorization'];

        if (!accessToken) {
            return res.status(400).json({ message: "Missing Access token", status: 400 })
        }

        const decoded = verifyJwt(accessToken);

        if (!decoded) {
            return res.status(201).json({ loggedIn: false, status: 201 })
        }

        return res.status(201).json({loggedIn: true, status: 201 });
         
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong while trying to verify login status.", result: e }, { status: 500 })
        return 
    }
  }