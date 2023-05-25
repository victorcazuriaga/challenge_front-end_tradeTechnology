import footballApi from './footballApi'
const getLeagues = async (country: string) => {
    const getApiKey = localStorage.getItem('apikey')
    const { data } = await footballApi<any>({
        url: `/leagues?country=${country}`,
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${getApiKey}`,
            'x-rapidapi-host': 'v3.football.api-sportds.io',
        },
    })
    console.log('GetLeague :', data)
    console.log(data.response)
    return data.response
}

export default getLeagues
