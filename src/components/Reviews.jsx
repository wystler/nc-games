import { useEffect, useState } from 'react'
import { fetchReviews } from '../utils.jsx'
import ReviewCard from './ReviewCard.jsx'
import ReviewFilter from './ReviewFilter.jsx'
import { useParams } from 'react-router-dom'

const Reviews = () => {

    const { category } = useParams()
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchReviews(category)
            .then((reviewArray) => {
                setIsLoading(false)
                setReviews(reviewArray)
            })
    }, [category])

    return (
        <div id="reviews">
            {<ReviewFilter />}
            {isLoading ? <p className="loadingMessage">Loading</p> : 
            reviews.map(review => {return <ReviewCard key={review.review_id} review={review} />})}
        </div>
    )
}

export default Reviews