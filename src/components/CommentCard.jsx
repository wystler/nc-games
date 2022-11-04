import VoteCounter from "./VoteCounter";
import '../css/Comments.css'
import DeleteComment from "./DeleteComment";

const CommentCard = (props) => {

    const {comment_id, body, votes, author, review_id, created_at} = props.comment
    const {delComment, setDelComment, username} = props
    const date = created_at.replace(/T.*/,"")
    const time = created_at.match(/\d\d:\d\d/)

    return (
        <div className="commentCard">
            <p className="commentCardBody">{body}</p>         
            <div className="commentCardFooter">
                <label className="footerInfo">
                <p className="commentCardLabel">Reviewed by</p>
                <p>{author}</p>
                </label>
                <label className="footerInfo">
                <p className="commentCardLabel">Submitted</p>
                <p>{date} - {time}</p>
                </label>
                {username === author ? 
                <DeleteComment comment_id={comment_id} delComment={delComment} setDelComment={setDelComment}/> :
                <p></p>
                }
                <VoteCounter review_id={review_id} comment_id={comment_id} votes={votes}/>
            </div>
        </div>
    )
}

export default CommentCard;