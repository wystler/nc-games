import { Link } from 'react-router-dom'
import '../css/Welcome.css'

const Welcome = () => {

    return (
        <div id="welcome">
            <Link to="/category/all">Look at the reviews</Link>
        </div>
    )
}

export default Welcome;