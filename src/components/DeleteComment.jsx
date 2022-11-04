import { removeComment } from '../utils.jsx'

const DeleteComment = (props) => {

    const { comment_id, delComment, setDelComment } = props

    const handleDeleteClick = () => {
        removeComment(comment_id)
        setDelComment(true)
            .then((res) => {
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