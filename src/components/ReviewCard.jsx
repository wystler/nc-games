import '../css/Reviews.css'

const ReviewCard = (props) => {

    const {id, title, category, designer, owner, review_body, review_img_url, created_at, votes, comment_count} = props.review

    return (
        <div className="reviewCard">
            <div className="reviewCardHead">
                <ul className="reviewCardHeadList">
                    <li>{title}</li>
                    <li>{category}</li>
                    <li>{designer}</li>
                </ul>
                <img src={review_img_url}/>
            </div>
        </div>
    )
}

export default ReviewCard;