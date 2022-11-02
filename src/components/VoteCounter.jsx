import { useEffect, useState } from "react";
import { updateVoteCount } from "../utils";

const VoteCounter = (props) => {

    const {review_id, votes} = props
    const [ voteCount, setVoteCount ] = useState(0)
    const [err, setErr] = useState(null)
    const [disableUpButton, setDisableUpButton ] = useState(false)
    const [disableDownButton, setDisableDownButton ] = useState(false)

    useEffect(() => {
                setVoteCount(votes)
            },[votes])

    const handleVote = (val) => {
        setVoteCount((CurrentVoteCount) => CurrentVoteCount + val)
        setErr(null)
        updateVoteCount(review_id, {inc_votes: val})
            .catch((err) => {
                setVoteCount((CurrentVoteCount) => CurrentVoteCount - val)
                setErr('Something went wrong, please try voting again')
            })
    }

    if (err) return <p>(err)</p>

    return (
        <div id="VoteCounter">
            <p>Votes</p>
            <div id="voteChanger">
            <button onClick={()=>handleVote(-1)} id="downVoteButton" disabled={disableDownButton}>-</button>
            <p>{voteCount}</p>
            <button onClick={()=>handleVote(1)} id="upVoteButton" disabled={disableUpButton}>+</button>
            </div>
        </div>
    )
}

export default VoteCounter;