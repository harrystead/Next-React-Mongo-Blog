export default function PostComments({ submitComment, handleChange, comment }) {
    return (
        <form onSubmit={submitComment}>
            <h2>Comments</h2>
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    value={comment.fullName ?? ""}
                    name="fullName"
                    onChange={handleChange}
                    placeholder="Fullname..." />
            </div>
            <div className="form-group">
                <textarea className="form-control"
                    value={comment.comment ?? ""}
                    name="comment"
                    onChange={handleChange}
                    placeholder="Add a comment..."
                    rows="2"></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}
