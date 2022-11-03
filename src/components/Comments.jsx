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
                setComments(commentArray)
            })
    }, [review_id])

    return (
        <div id="comments">
            {isLoading ? <p className="loadingMessage">Loading</p> : 
            comments.map(comment => {return <CommentCard key={review_id} comment={comment} />})}
        </div>
    )
}

export default Comments;