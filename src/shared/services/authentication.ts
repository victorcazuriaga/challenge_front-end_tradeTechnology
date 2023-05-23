import { AxiosStatusResponse } from '../types/footballApi'
import footballApi from './footballApi'
const authenticate = async (apiKey: string) => {
    const { data } = await footballApi<any, AxiosStatusResponse>({
        url: '/status',
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'v3.football.api-sportds.io',
            'x-rapidapi-key': `${apiKey}`,
        },
    })
    if (data?.response?.subscription?.active) {
        localStorage.setItem('apikey', apiKey)
        return true
    }
    return false
}

export default authenticate
