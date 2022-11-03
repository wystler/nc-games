import { useEffect, useState } from 'react'
import { fetchReviewById } from '../utils.jsx'
import ReviewCard from './ReviewCard.jsx'
import { useParams, Link } from 'react-router-dom'

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
    }, [review_id])

    return (
        <div id="selectedReview">
            {isLoading ? <p className="loadingMessage">Loading</p> : 
            <>
            <Link to="/" id="homeLink">Back to reviews</Link>
            <ReviewCard key={review.review_id} review={review} fullReview={true}/>
            </>}
        </div>
    )
}

export default SelectedReview;