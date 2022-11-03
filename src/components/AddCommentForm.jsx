import { useState } from 'react'
import { addComment } from '../utils.jsx'

const AddCommentForm = (props) => {

    const {review_id, username, setAddComment} = props
    const [commentBody, setCommentBody] = useState()
    const [err, setErr] = useState(null)
    const [disableSubmit, setDisableSubmit] = useState(false)

    const handleSubmitNewComment = (event) => {
        event.preventDefault()
        if(commentBody.length<20) {return setErr("comment must be at least 20 characters long")}
        setErr(null)
        setDisableSubmit(true)
        addComment(review_id, {body:commentBody, username:username})
            .then((res) => {
                setCommentBody("")
                setDisableSubmit(false)
                setAddComment(false)
            })
        .catch((err) => {
            setDisableSubmit(false)
            setErr('Something went wrong, please try again')
        })
    }

    return (
        <form id="addCommentForm" onSubmit={handleSubmitNewComment}>
            <p>Add comment as {username}</p>
            <textarea value={commentBody} onChange={(event) => setCommentBody(event.target.value)} id="newCommentTextArea" placeholder="comments must be at least 20 characters long..."></textarea>
            <button type="submit" disabled={disableSubmit} id="submitNewCommentButton">Submit your comment</button>
            <p>{err}</p>
        </form>     
    )
}

export default AddCommentForm;