import { connectToDatabase } from "./api";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getAllComments(req, res);
        }

        case 'POST': {
            return addComment(req, res);
        }
    }
}

async function getAllComments(req, res) {
    let { db } = await connectToDatabase();
    try {
        let comments = await db
            .collection('Comments')
            .find()
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

async function addComment(req, res) {
    let { db } = await connectToDatabase();
    try {
        await db.collection('Comments').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Comment added successfully',
            comment: JSON.parse(req.body),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}