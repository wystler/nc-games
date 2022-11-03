import { useNavigate, useSearchParams } from 'react-router-dom'

const ReviewFilter = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const handleChangeCategory = (event) => {
        if (event.target.value) {
        navigate(`/category/${event.target.value}`)
        } else {
            navigate('/')
        }
    }

    const handleChangeSort = (event) => {

    }

    const handleChangeOrder = (event) => {

    }

    return (
        <div id="reviewFilter">
            <label id="reviewFilterCategory">Choose a game category
                <select onChange={handleChangeCategory}>
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

            <label id="reviewFilterSortBy">Sort the reviews by
                <select onChange={handleChangeSort}>
                    <option value="date">Date</option>
                    <option value="comment_count">Comment count</option>
                    <option value="votes">Vote count</option>
                </select>
            </label>

            <label id="reviewFilterOrder">In order
                <select onChange={handleChangeOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </label>

        </div>
    )
}

export default ReviewFilter