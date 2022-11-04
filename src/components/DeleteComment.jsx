import { removeComment } from '../utils.jsx'

const DeleteComment = (props) => {

    const { comment_id, setDelComment } = props

    const handleDeleteClick = () => {
        removeComment(comment_id)
            .then((res) => {
                setDelComment(true)
            })
    }

    return (
        <div>
            <p>Delete comment?</p>
            <button onClick={handleDeleteClick}>X</button>
        </div>
    )
}

export default DeleteComment