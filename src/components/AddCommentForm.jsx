import { useState } from 'react'
import { addComment } from '../utils.jsx'

const AddCommentForm = (props) => {

    const {review_id, username} = props
    const [commentBody, setCommentBody] = useState("")
    const [err, setErr] = useState(null)
    const [disableSubmit, setDisableSubmit] = useState(false)

    const handleSubmitNewComment = (event) => {
        event.preventDefault()
        setErr(null)
        setDisableSubmit(true)
        addComment(review_id, {body:commentBody, username:username})
            .then((res) => {
                setCommentBody("")
                setDisableSubmit(false)
                setErr('Adding comment was a success!')
            })
        .catch((err) => {
            setDisableSubmit(false)
            setErr('Something went wrong, please try again')
        })
    }

    return (
        <form id="addCommentForm" onSubmit={handleSubmitNewComment}>
            <p>Add comment as {username}</p>
            <input type="textarea" value={commentBody} onChange={(event) => setCommentBody(event.target.value)} id="newCommentTextArea"></input>
            <button type="submit" disabled={disableSubmit} id="submitNewCommentButton">Submit your comment</button>
            <p>{err}</p>
        </form>
        
    )
}

export default AddCommentForm;