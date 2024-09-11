export default function handler(req, res) {
    res.status(200).json({text: 'Hello!'});
}

export async function fetchPosts() {
    //THIS IS VERY STANDARD
    const response = await fetch('API Example.com');
    const data = await response.json();
    return data;
}

export default function handler(req, res) {
    const email = req.body.email;
    
}