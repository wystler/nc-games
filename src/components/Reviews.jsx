import { useEffect, useState } from 'react'
import { fetchReviews } from '../utils.jsx'
import ReviewCard from './ReviewCard.jsx'
import ReviewFilter from './ReviewFilter.jsx'
import { useParams, useSearchParams } from 'react-router-dom'

const Reviews = () => {

    const { category } = useParams()
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState("created_at")
    const [order, setOrder] = useState("desc")
    const [searchParams, setSearchParams] = useSearchParams({sort_by:"created_at", order:"desc"})

    useEffect(() => {
        fetchReviews(category, sortBy, order)
            .then((reviewArray) => {
                setSearchParams({sort_by:sortBy, order:order})
                setIsLoading(false)
                setReviews(reviewArray)
            })
    }, [category, sortBy, order, setSearchParams, searchParams])

    return (
        <div id="reviews">
            {<ReviewFilter setSortBy={setSortBy} setOrder={setOrder}/>}
            {isLoading ? <p className="loadingMessage">Loading</p> : 
            reviews.map(review => {return <ReviewCard key={review.review_id} review={review} />})}
        </div>
    )
}

export default Reviews