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
        <div>
            {reviews.map(review => {return <ReviewCard review={review}/>})}
        </div>
    )
}

export default Reviews