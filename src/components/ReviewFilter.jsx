import { useNavigate } from 'react-router-dom'

const ReviewFilter = () => {

    const navigate = useNavigate()

    const handleChange = (event) => {
        navigate(`/category/${event.target.value}`)
    }

    return (
        <div>
            <select onChange={handleChange}>
                <option value="all">All</option>
            </select>
        </div>
    )
}

export default ReviewFilter