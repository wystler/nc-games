const AddCommentForm = (props) => {

    const {username} = props
    return (
        <form id="addCommentForm">
            <p>Add comment as {username}</p>
            <input id="newCommentTextArea" type="textarea" name="body"></input>
            <input type="submit" value="Submit new comment"></input>
        </form>
    )
}

export default AddCommentForm;