import axios from "axios"
axios.defaults.baseURL = "https://nc-board-game-api.herokuapp.com/api/"

export const fetchReviews = (category) => {
    let queryString = ""
    if (category) queryString = `?category=${category}`
    
    return axios.get(`reviews${queryString}`)
        .then((res) => {
            return res.data})
}

export const fetchReviewById = (review_id) => {
    return axios.get(`reviews/${review_id}`)
        .then((res) => {
            return res.data
        })
}

export const updateReviewVoteCount = (review_id, voteCount) => {
    return axios.patch(`reviews/${review_id}`, voteCount)
        .then((res) => {
            return res
        })
}

export const updateCommentVoteCount = (comment_id, voteCount) => {
    return axios.patch(`comments/${comment_id}`, voteCount)
        .then((res) => {
            return res
        })
}

export const fetchComments = (review_id) => {
    return axios.get(`reviews/${review_id}/comments`)
        .then((res) => {
            return res.data
        })
}

export const removeComment = (comment_id) => {
    console.log(comment_id)
    return axios.delete(`comments/${comment_id}`)
        .then((res) => {
            return res
        })
}