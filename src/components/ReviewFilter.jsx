import { useNavigate } from 'react-router-dom'

const ReviewFilter = (props) => {

    const {setSortBy, setOrder} = props
    const navigate = useNavigate()

    const handleChangeCategory = (event) => {
        if (event.target.value) {
        navigate(`/category/${event.target.value}`)
        } else {
            navigate('/')
        }
    }

    const handleChangeSort = (event) => {
        setSortBy(event.target.value)
    }

    const handleChangeOrder = (event) => {
        setOrder(event.target.value)
    }

    return (
        <div id="reviewFilter">
            <div id="selectCategory">
                <label id="reviewFilterCategory">Choose a game category
                    <select className="filterSelecter" onChange={handleChangeCategory}>
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
            <div id="selectSorting">
                <label id="reviewFilterSortBy">Sort the reviews by
                    <select className="filterSelecter" onChange={handleChangeSort}>
                        <option value="created_at">Date</option>
                        <option value="comment_count">Comment count</option>
                        <option value="votes">Vote count</option>
                    </select>
                </label>

                <label id="reviewFilterOrder">in
                    <select className="filterSelecter" onChange={handleChangeOrder}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                    order
                </label>
            </div>
        </div>
    )
}

export default ReviewFilter