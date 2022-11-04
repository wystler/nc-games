import { useEffect, useState } from 'react'
import { fetchReviewById } from '../utils.jsx'
import ReviewCard from './ReviewCard.jsx'
import Comments from './Comments.jsx'
import { useParams } from 'react-router-dom'

const SelectedReview = (props) => {

    const { review_id } = useParams()
    const [review, setReview] = useState(null)
    const { username } = props

    useEffect(() => {
        fetchReviewById(review_id)
            .then((selectedReview) => {
                setReview(selectedReview)
            })
    }, [review_id])

    return (
        <div id="selectedReview">
            {!review ? <p className="loadingMessage">Loading</p> :        
            <ReviewCard key={review.review_id} review={review} fullReview={true} />
            }
        </div>
    )
}

export default SelectedReview;