import { useEffect, useState } from "react";
import { updateVoteCount } from "../utils";

const VoteCounter = (props) => {

    const {review_id, votes} = props
    const [ voteCount, setVoteCount ] = useState(0)

    useEffect(() => {
                setVoteCount(votes)
            },[votes])

    const handleDownVote = () => {
        setVoteCount((CurrentVoteCount) => CurrentVoteCount - 1)
        updateVoteCount(review_id, {inc_votes: -1})
    }

    const handleUpVote = () => {
        setVoteCount((CurrentVoteCount) => CurrentVoteCount + 1)
        updateVoteCount(review_id, {inc_votes: 1})
    }

    return (
        <div>
            <h2>{voteCount}</h2>
            <button onClick={handleDownVote}>- vote</button>
            <button onClick={handleUpVote}>+ vote</button>
        </div>
    )
}

export default VoteCounter;