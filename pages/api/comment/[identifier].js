import { connectToDatabase } from "../api";

export default async function handler(req, res) {
    const { query: { identifier } } = req;

    switch (req.method) {
        case 'GET': {
            return getCommentsByIdentifier(req, res, identifier);
        }
    }
}

async function getCommentsByIdentifier(req, res, identifier) {
    let { db } = await connectToDatabase();
    try {
        let comments = await db
            .collection('Comments')
            .find({
                identifier: identifier
            })
            .toArray();

        return res.json({
            comments: JSON.parse(JSON.stringify(comments)),
            success: true,
        });

    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
