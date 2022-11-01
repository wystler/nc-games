import '../css/Reviews.css'

const ReviewCard = (props) => {

    const {id, title, category, designer, owner, review_body, review_img_url, created_at, votes, comment_count} = props.review

    return (
        <div className="reviewCard">

            <div className="reviewCardHead">
                <ul className="reviewCardHeadList">
                    <li><span className="reviewCardLabel">Title :</span> {title}</li>
                    <li><span className="reviewCardLabel">Category :</span> {category}</li>
                    <li><span className="reviewCardLabel">Designer :</span> {designer}</li>
                </ul>
                <img src={review_img_url}/>
            </div>

            <p className="reviewCardBody">{review_body}</p>

            <div className="reviewCardFooter">
                <label>
                <p className="reviewCardLabel">Review by</p>
                <p>{owner}</p>
                </label>
                <label>
                <p className="reviewCardLabel">Submitted</p>
                <p>{created_at.replace(/T.*/,"")}</p>
                </label>
                <label>
                <p className="reviewCardLabel">Comment count</p>
                <p>{comment_count}</p>
                </label>
                <label>
                <p className="reviewCardLabel">Votes</p>
                <p>{votes}</p>
                </label>
            </div>
        </div>
    )
}

export default ReviewCard;