import { useEffect, useState } from 'react'
import { fetchReviewById } from '../utils.jsx'
import ReviewCard from './ReviewCard.jsx'
import { useParams } from 'react-router-dom'

const SelectedReview = () => {

    const { review_id } = useParams()
    const [review, setReview] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchReviewById(review_id)
            .then((selectedReview) => {
                setIsLoading(false)
                setReview(selectedReview)
            })
    }, [])

    return (
        <div id="selectedReview">
            {isLoading ? <p className="loadingMessage">Loading</p> : 
            <ReviewCard key={review.review_id} review={review} />}
        </div>
    )
}

export default SelectedReview;