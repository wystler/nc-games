import { useEffect, useState } from "react";
import { updateVoteCount } from "../utils";

const VoteCounter = (props) => { 

    const {review_id, votes} = props
    const [voteCount, setVoteCount] = useState(votes)
    const [err, setErr] = useState(null)
    const [disableDownButton, setDisableDownButton ] = useState(false)
    const [disableUpButton, setDisableUpButton ] = useState(false)

    useEffect(() => {
        if (voteCount-votes > 0) setDisableUpButton(true)
        if (voteCount-votes === 0) {setDisableUpButton(false) 
            setDisableDownButton(false)}
        if (voteCount-votes < 0) setDisableDownButton(true)
    },[voteCount, votes]) 

    const handleVote = (val) => {
        setVoteCount((CurrentVoteCount) => CurrentVoteCount + val)
        setErr(null)
        updateVoteCount(review_id, {inc_votes: val})
            .catch((err) => {
                setVoteCount((CurrentVoteCount) => CurrentVoteCount - val)
                setErr('Something went wrong, click here to try voting again')
            })
    }

    if (err) return <p onClick={()=>setErr(null)}>{err}</p>

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