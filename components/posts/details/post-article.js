import ReactMarkdown from "react-markdown";
import classes from "./post-article.module.css";
import PostHeader from "./post-header";

export default function PostArticle({ post }) {
    const imagePath = `/images/posts/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    )
}