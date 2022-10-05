import { useState, useEffect } from "react";
import classes from "./comments-details/post-comments.module.css";
import PostComments from "./comments-details/post-comments";
import DisplayComments from "./comments-details/display-comments";
import axios from 'axios';
import { useRouter } from 'next/router'

export default function Comments() {
    const router = useRouter();
    const { identifier } = router.query;

    const [comment, setComment] = useState({
        identifier: identifier,
        fullName: "",
        comment: ""
    });

    const [allComments, setAllComments] = useState([]);

    const getCommentsByIdentifier = async () => {
        await axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            },
            url: `http://localhost:3000/api/comment/${identifier}`
        }).then(result => { setAllComments(result.data.comments) });
    }  

    const handleChange = async (evt) => {
        const value = evt.target.value;
        setComment({
            ...comment,
            [evt.target.name]: value
        });
    }

    const submitComment = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/comment`, { method: 'POST', body: JSON.stringify(comment)});
        let data = await response.json();

        if (data.success) { setComment({
                identifier: identifier,
                fullName: "",
                comment: ""
            });
        }

        return data;
    }

    useEffect(() => {
        getCommentsByIdentifier();
    }, [comment])

    return (
        <footer className={classes.footer}>
            <div className={classes.comments}>
                <PostComments handleChange={handleChange} submitComment={submitComment} comment={comment}></PostComments>
                <DisplayComments comments={allComments}></DisplayComments>
            </div>
        </footer>
    )
}