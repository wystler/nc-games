import { useEffect, useState } from 'react'
import { fetchReviewById } from '../utils.jsx'
import ReviewCard from './ReviewCard.jsx'
// import Comments from './Comments.jsx'
import { useParams, Link } from 'react-router-dom'

const SelectedReview = (props) => {

    const { review_id } = useParams()
    const [review, setReview] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const { username } = props
    const [noReviewErr, setNoReviewErr] = useState(false)

    useEffect(() => {
        fetchReviewById(review_id)
            .then((selectedReview) => {
                setIsLoading(false)
                setReview(selectedReview)
            }).catch((err) => {
                setNoReviewErr("No review with that id exists")
                setIsLoading(false)
            })
    }, [review_id])

    return (
        <div id="selectedReview">
            {isLoading ? <p className="loadingMessage">Loading</p> : 
            noReviewErr ? <><Link to="/" id="homeLink">Sorry, there is no review with that id
            <p id="noReviewError">Back to reviews</p></Link></> :
            <>
            <Link to="/" id="homeLink">Back to reviews</Link>
            <ReviewCard key={review.review_id} review={review} fullReview={true} />
            {/* <Comments review_id={review.review_id} username={username}/> */}
            </>}
        </div>
    )
}

export default SelectedReview;