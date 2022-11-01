import axios from "axios"
axios.defaults.baseURL = "https://nc-board-game-api.herokuapp.com/api/"

export const fetchReviews = (category) => {
    let queryString = ""
    if (category!="all") queryString = `?category=${category}`
    console.log(queryString)
    return axios.get(`reviews${queryString}`)
        .then((res) => {
            return res.data})
}