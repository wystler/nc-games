import { removeComment } from '../utils.jsx'

const DeleteComment = (props) => {

    const { comment_id, delComment, setDelComment } = props

    const handleDeleteClick = (event) => {
        event.preventDefault()
        removeComment(comment_id)
            .then((res) => {
        setDelComment(true)
            })
    }

    return (
        <div>
            <p>Delete comment?</p>
            <button onClick={handleDeleteClick} disabled={delComment}>X</button>
        </div>
    )
}

export default DeleteComment