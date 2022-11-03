import { useState } from 'react'

const AddCommentForm = (props) => {

    const {username} = props
    const [commentBody, setCommentBody] = useState("")

    const handleSubmitNewComment = (event) => {
        event.preventDefault()
        console.log(commentBody)
    }

    return (
        <form id="addCommentForm" onSubmit={handleSubmitNewComment}>
            <p>Add comment as {username}</p>
            <input type="textarea" value={commentBody} onChange={(event) => setCommentBody(event.target.value)} id="newCommentTextArea"></input>
            <button type="submit" id="submitNewCommentButton">Submit your comment</button>
        </form>
    )
}

export default AddCommentForm;