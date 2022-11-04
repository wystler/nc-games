import { removeComment } from '../utils.jsx'

const DeleteComment = (props) => {

    const { comment_id, delComment, setDelComment } = props

    const handleDeleteClick = (event) => {
        event.preventDefault()
        setDelComment(true)
        removeComment(comment_id)
            .then((res) => {
            })
    }

    return (
        <div className="deleteComment">
            <p>Delete?</p>
            <button onClick={handleDeleteClick} disabled={delComment}>X</button>
        </div>
    )
}

export default DeleteComment