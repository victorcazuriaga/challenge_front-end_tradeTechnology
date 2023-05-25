import footballApi from './footballApi'

const getPlayersTeam = async (idTeam: any, idLeague: any, idSeason: any) => {
    const getApiKey = localStorage.getItem('apikey')
    const { data } = await footballApi<any>({
        url: `/teams?id=${idTeam}&league=${idLeague}&season=${idSeason}`,
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${getApiKey}`,
            'x-rapidapi-host': 'v3.football.api-sportds.io',
        },
    })
    console.log('GetPlayersofTeam :', data)
    return data.response
}
export default getPlayersTeam
