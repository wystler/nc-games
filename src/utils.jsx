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

export const updateVoteCount = (review_id, voteCount) => {
    return axios.patch(`reviews/${review_id}`, voteCount)
        .then((res) => {
            return res
        })
}