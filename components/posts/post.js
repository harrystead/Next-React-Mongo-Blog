import classes from "./post.module.scss";
import Link from "next/link";

export default function Post({ post }) {
    return (
        <Link href={`/posts/${post.slug}/${post.identifier}`}>
            <a>
                <div className={classes.card}>
                    <img src={`images/posts/${post.image}`} className={classes.cardImage} alt={post.title} />
                    <div className={classes.cardContent}>
                        <time className={classes.cardDate}>{post.date}</time>
                        <span className={classes.cardTitle}>{post.title}</span>
                        <p className={classes.cardExcerpt}>{post.excerpt}</p>
                        <div className={classes.button}>
                            <button className={classes.readMore}>Read More</button>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}