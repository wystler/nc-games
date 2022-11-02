import { useEffect, useState } from "react";
import { updateVoteCount } from "../utils";

const VoteCounter = (props) => {

    const {review_id, votes} = props
    const [ voteCount, setVoteCount ] = useState(0)

    useEffect(() => {
                setVoteCount(votes)
            },[votes])

    const handleVote = (val) => {
        setVoteCount((CurrentVoteCount) => CurrentVoteCount + val)
        updateVoteCount(review_id, {inc_votes: val})
    }

    // if (err) return <p>(err)</p>

    return (
        <div id="VoteCounter">
            <p>Votes
            <div id="voteChanger">
            <button onClick={()=>handleVote(-1)} id="downVoteButton">-</button>
            <p>{voteCount}</p>
            <button onClick={()=>handleVote(1)} id="upVoteButton">+</button>
            </div>
            </p>
        </div>
    )
}

export default VoteCounter;