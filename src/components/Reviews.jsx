import { useEffect, useState } from 'react'
import { fetchReviews } from './utils.jsx'
import ReviewCard from './ReviewCard.jsx'

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchReviews()
            .then((reviewArray) => {
                setReviews(reviewArray)
            })
    }, [])

    return (
        <div id="reviews">
            {reviews.map(review => {return <ReviewCard key={review.review_id} review={review}/>})}
        </div>
    )
}

export default Reviews