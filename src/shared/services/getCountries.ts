import { useQuery } from '@tanstack/react-query'
import footballApi from './footballApi'
const getCountries = async () => {
    const getApiKey = localStorage.getItem('apikey')
    const { data } = await footballApi<any>({
        url: '/countries',
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${getApiKey}`,
            'x-rapidapi-host': 'v3.football.api-sportds.io',
        },
    })
    console.log('getCountries :', data.reponse)

    return data.response
}

export default getCountries
