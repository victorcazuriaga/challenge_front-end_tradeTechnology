import {
    ContainerSearchBar,
    LabelSearchBar,
    Select,
    WrapperLabel,
} from './sytle'
import getLeagues from '../../shared/services/getLeagues'
import { useEffect, useState } from 'react'
import getTimes from '../../shared/services/getTimes'
import getPlayersTeam from '../../shared/services/getPlayersTeam'
import isListEmpty from '../../shared/utils/isListEmpty'

export const SearchBar = ({ countries }: any) => {
    const [seasson, setSeasson] = useState<Array<number>>([])
    const [league, setLeagues] = useState([])
    const [selectedData, setSelectedData] = useState({
        league: null,
        team: null,
        season: null,
    })
    const [team, setTeam] = useState([])
    useEffect((): void => {}, [team, league, seasson])

    const handleCountryChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const countrySelect = event.target.value
        const leagues = await getLeagues(countrySelect)
        setLeagues(leagues)
    }

    const handleLeagueChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const leagueSelected: any = event.target.value
        setSelectedData((prevState) => ({
            ...prevState,
            league: leagueSelected,
        }))
        const years = league.filter(({ league }) => {
            return leagueSelected == league.id
        })

        const resultYear: any = years?.flatMap((item) =>
            item.seasons.map((season) => season.year)
        )
        setSeasson(resultYear)
    }
    const handleSeasonChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const seasonSelect: any = event.target.value
        setSelectedData((prevState) => ({
            ...prevState,
            league: seasonSelect,
        }))
        const teams: any = await getTimes(
            Number(selectedData.league),
            Number(selectedData.season)
        )
        setTeam(teams)
    }
    const handleTeamChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const teamSelect = event.target.value
        const { league, team, season } = selectedData
        const getPlayer = await getPlayersTeam(team, league, season)
    }

    return (
        <ContainerSearchBar>
            <WrapperLabel>
                <LabelSearchBar htmlFor="Country"> País </LabelSearchBar>
                <Select id="Country" onChange={handleCountryChange}>
                    <option value="default"></option>
                    {countries?.map((country: any) => (
                        <option key={country.name} value={country.name}>
                            {' '}
                            {country.name}
                        </option>
                    ))}
                </Select>
                <LabelSearchBar htmlFor=""> Ligas </LabelSearchBar>
                <Select
                    onChange={handleLeagueChange}
                    disabled={isListEmpty(league)}
                >
                    <option value="default"></option>
                    {league?.map(({ league }: any) => (
                        <option key={league.id} value={league.id}>
                            {' '}
                            {league.name}
                        </option>
                    ))}
                </Select>
                <LabelSearchBar htmlFor=""> Edição </LabelSearchBar>
                <Select
                    onChange={handleSeasonChange}
                    disabled={isListEmpty(league)}
                >
                    <option value="default"></option>
                    {seasson?.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </Select>
                <LabelSearchBar>Times</LabelSearchBar>
                <Select
                    onChange={handleTeamChange}
                    disabled={isListEmpty(team)}
                >
                    <option value="default"></option>
                    {team?.map(({ team }: any) => (
                        <option key={team.id} value={team.id}>
                            {' '}
                            {team.name}
                        </option>
                    ))}
                </Select>
            </WrapperLabel>
        </ContainerSearchBar>
    )
}
