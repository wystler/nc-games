import '../css/Reviews.css'
import VoteCounter from './VoteCounter'
import { useNavigate } from 'react-router-dom'

const ReviewCard = (props) => {

    const {review_id, title, category, designer, owner, review_body, review_img_url, created_at, votes, comment_count} = props.review
    const {full} = props
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate(`/review/${event}`)
    }

    return (
        <div className="reviewCard" onClick={(event)=>handleClick(review_id)} >

            <div className="reviewCardHead">
                <ul className="reviewCardHeadList">
                    <li><span className="reviewCardLabel">Title :</span> {title}</li>
                    <li><span className="reviewCardLabel">Category :</span> {category}</li>
                    <li><span className="reviewCardLabel">Designer :</span> {designer}</li>
                </ul>
                <img src={review_img_url} alt={title}/>
            </div>
            {full ? <p className="reviewCardBody">{review_body}</p> :
            review_body.length < 280 ? <p className="reviewCardBody">{review_body}</p> :
            <p className="reviewCardBody">{review_body.slice(0, 280)}.....</p>}

            <div className="reviewCardFooter">
                <label>
                <p className="reviewCardLabel">Reviewed by</p>
                <p>{owner}</p>
                </label>
                <label>
                <p className="reviewCardLabel">Submitted</p>
                <p>{created_at.replace(/T.*/,"")}</p>
                </label>
                <label>
                <p className="reviewCardLabel">Comments</p>
                <p>{comment_count}</p>
                </label>

                {full ? <VoteCounter review_id={review_id} votes={votes}/> : 
                <label> <p className="reviewCardLabel">Votes</p>
                <p>{votes}</p>
                </label>}
            </div>
        </div>
    )
}

export default ReviewCard;