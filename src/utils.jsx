import axios from "axios"
axios.defaults.baseURL = "https://wystler-ncgames-api.cyclic.app/api/"

export const fetchReviews = (category, sort_by, order) => {
    let queryString = `?sort_by=${sort_by}&order=${order}`
    if (category) queryString = `?category=${category}&sort_by=${sort_by}&order=${order}`
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

export const addComment = (review_id, newComment) => {
    return axios.post(`reviews/${review_id}/comments`, newComment)
        .then((res) => {
            return res.status
        })
}

export const removeComment = (comment_id) => {
    return axios.delete(`comments/${comment_id}`)
        .then((res) => {
            return res
        })
}