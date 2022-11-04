import { Link } from 'react-router-dom'

const ReturnHome = (props) => {

    const { username } = props

    return (
        <div id="returnHome">
            <Link to="/" id="returnHomeLink">
                <p>You appear to have got lost somewhere, {username}</p>
                <p>Click here to get back home</p>
            </Link>
        </div>
    )
}

export default ReturnHome