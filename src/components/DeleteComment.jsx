import { removeComment } from '../utils.jsx'
import { useState } from 'react'

const DeleteComment = (props) => {

    const [delCommentErr, setDelCommentErr] = useState(null)

    const { comment_id, delComment, setDelComment } = props

    const handleDeleteClick = (event) => {
        event.preventDefault()
        setDelCommentErr(null)
        setDelComment(true)
        removeComment(comment_id)
            .then((res) => {

            })
            .catch((err) => {
            setDelComment(false)
            setDelCommentErr('Something went wrong, please try again')
        })
    }

    return (
        <div className="deleteComment">
            <p>Delete?</p>
            <button onClick={handleDeleteClick} disabled={delComment}>X</button>
            { delCommentErr ? <p>{delCommentErr}</p> : <></>}
        </div>
    )
}

export default DeleteComment