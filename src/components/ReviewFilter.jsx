import { useNavigate } from 'react-router-dom'

const ReviewFilter = () => {

    const navigate = useNavigate()

    const handleChange = (event) => {
        if (event.target.value) {
        navigate(`/category/${event.target.value}`)
        } else {
            navigate('/')
        }
    }

    return (
        <div id="reviewFilter">
            <label id="reviewFilterSelecter">Choose a game category
                <select onChange={handleChange}>
                    <option value="">All</option>
                    <option value="dexterity">Dexterity</option>
                    <option value="strategy">Strategy</option>
                    <option value="hidden-roles">Hidden Roles</option>
                    <option value="push-your-luck">Push your luck</option>
                    <option value="roll-and-write">Roll and write</option>
                    <option value="deck-building">Deck building</option>
                    <option value="engine-building">Engine building</option>
                </select>
            </label>
        </div>
    )
}

export default ReviewFilter