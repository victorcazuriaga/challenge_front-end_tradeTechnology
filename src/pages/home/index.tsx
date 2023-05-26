import { useQuery } from '@tanstack/react-query'
import { ContentDisplay } from '../../components/ContentDisplay'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { SearchBar } from '../../components/SearchBar'
import getCountries from '../../shared/services/getCountries'
import { ContainerHomePage } from './style'

export const HomePage = () => {
    const { data, isError, isLoading } = useQuery(
        ['countries'],
        async () => {
            return await getCountries()
        },
        { cacheTime: 50000 }
    )
    return (
        <ContainerHomePage>
            <Header
                onLogout={function (): void {
                    throw new Error('Function not implemented.')
                }}
            />
            <SearchBar countries={data} />
            <ContentDisplay />
            <Footer />
        </ContainerHomePage>
    )
}
