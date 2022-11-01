const ReviewCard = (props) => {

    const {review} = props
    return (
        <div>
            {review.title}
        </div>
    )
}

export default ReviewCard;