import footballApi from './footballApi'

const getTimes = async (idLeague: any, season: any) => {
    console.log(idLeague)
    const getApiKey = localStorage.getItem('apikey')
    const { data } = await footballApi<any>({
        url: `/teams?league=${idLeague}&season=${season}`,
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${getApiKey}`,
            'x-rapidapi-host': 'v3.football.api-sportds.io',
        },
    })
    console.log('GetTime :', data)
    return data.response
}
export default getTimes
