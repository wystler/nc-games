import CommentCard from "./CommentCard";
import { useState, useEffect } from 'react'
import { fetchComments } from '../utils.jsx'

const Comments = (props) => {

    const { review_id } = props
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchComments(review_id)
            .then((commentArray) => {
                setIsLoading(false)
                if (Array.isArray(commentArray)) {
                setComments(commentArray)}             
            })
    }, [review_id])

    return (
        <div id="comments">
            <h2 id="commentHeader">Comments</h2>
            {
            isLoading ? <p className="loadingMessage">Loading</p> : 
            comments.length > 0 ? comments.map(comment => {return <CommentCard key={comment.comment_id} comment={comment} />}) :
            <p>No comments for this review</p>
            }
        </div>
    )
}

export default Comments;