import axios from 'axios'

const footballApi = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
})

export default footballApi
