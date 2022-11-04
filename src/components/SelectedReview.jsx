import { useEffect, useState } from 'react'
import { fetchReviewById } from '../utils.jsx'
import ReviewCard from './ReviewCard.jsx'
import Comments from './Comments.jsx'
import { useParams, Link } from 'react-router-dom'

const SelectedReview = (props) => {

    const { review_id } = useParams()
    const [review, setReview] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { username } = props

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
            <ReviewCard key={review.review_id} review={review} fullReview={true} />
            <Comments review_id={review.review_id} username={username}/>
            </>}
        </div>
    )
}

export default SelectedReview;