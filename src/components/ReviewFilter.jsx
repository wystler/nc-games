import { useNavigate } from 'react-router-dom'

const ReviewFilter = () => {

    const navigate = useNavigate()

    const handleChange = (event) => {
        navigate(`/category/${event.target.value}`)
    }

    return (
        <div id="reviewFilter">
            <select onChange={handleChange}>
                <option value="all">All</option>
                <option value="dexterity">Dexterity</option>
                <option value="strategy">Strategy</option>
                <option value="hidden-roles">Hidden Roles</option>
                <option value="push-your-luck">Push your luck</option>
                <option value="roll-and-write">Roll and write</option>
                <option value="deck-building">Deck building</option>
                <option value="engine-building">Engine building</option>
            </select>
        </div>
    )
}

export default ReviewFilter