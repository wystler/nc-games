import VoteCounter from "./VoteCounter";
import '../css/Comments.css'

const CommentCard = (props) => {

    const {comment_id, body, votes, author, review_id, created_at} = props.comment

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
                <p>{created_at.replace(/T.*/,"")}</p>
                </label>
                <VoteCounter comment_id={comment_id} votes={votes}/> 
            </div>
        </div>
    )
}

export default CommentCard;