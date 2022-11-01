import axios from "axios"
axios.defaults.baseURL = "https://nc-board-game-api.herokuapp.com/api/"

export const fetchReviews = () => {
    return axios.get('reviews')
        .then((res) => {
            return res.data})
}