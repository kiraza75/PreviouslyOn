import axios from "axios"

export const API_KEY = "7020d39cf94f";

const instance = axios.create({
    baseURL: "https://api.betaseries.com",
    headers: {
        "X-BetaSeries-Version": "3.0",
        "X-BetaSeries-Key": API_KEY
    }
})

export default instance;