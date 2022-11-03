import CommentCard from "./CommentCard";
import AddCommentForm from "./AddCommentForm"
import { useState, useEffect } from 'react'
import { fetchComments } from '../utils.jsx'

const Comments = (props) => {

    const { review_id, username } = props
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [addComment, setAddComment] = useState(false)

    useEffect(() => {
        fetchComments(review_id)
            .then((commentArray) => {
                setIsLoading(false)
                if (Array.isArray(commentArray)) {
                setComments(commentArray)}             
            })
    }, [review_id])

    const handleClickAddYourComment = () => {
        setAddComment(true)
    }

    return (
        <div id="comments">
            <h2 id="commentHeader">Comments</h2>
            {
            addComment ? 
            <><button onClick={()=>setAddComment(false)} className="commentButton">Close add comment</button> <AddCommentForm username={username}/></> : 
            <button onClick={handleClickAddYourComment} className="commentButton">Add your own comment</button>}
            {
            isLoading ? <p className="loadingMessage">Loading</p> : 
            comments.length > 0 ? comments.map(comment => {return <CommentCard key={comment.comment_id} comment={comment} />}) :
            <p>No comments for this review</p>
            }
        </div>
    )
}

export default Comments;