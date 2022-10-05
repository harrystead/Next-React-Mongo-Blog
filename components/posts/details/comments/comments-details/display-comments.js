import classes from "./display-comments.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function DisplayComments({comments}) {
    return (
        <>
            {comments.map(comment => (
                    <div className={classes.listComments}>
                        <div className="list-group">
                            <div className="list-group-item list-group-item-action">
                                <h5>{comment.fullName}</h5>
                                <p className={classes.comment}>{comment.comment}</p>
                                <div className={classes.bottomRow}>
                                    <FontAwesomeIcon className={classes.thumbsUp} 
                                    icon={faThumbsUp} />
                                </div>
                                <div className={classes.bottomRow}>
                                    <p className={classes.count}>0</p>
                                </div>
                                <div className={classes.bottomRow}>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}


