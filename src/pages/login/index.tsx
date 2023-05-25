import { AnimationLogin } from '../../components/AnimationLogin'
import { Footer } from '../../components/Footer'
import { FormLogin } from '../../components/FormLogin'
import { Header } from '../../components/Header'
import { SearchBar } from '../../components/SearchBar'
import useMediaQuery from '../../shared/customHook/useMediaQuery'
import { ContainerPageLogin } from './style'
export const LoginPage = () => {
    const mediaQuery: boolean = useMediaQuery('(min-width: 767px)')

    return (
        <>
            <ContainerPageLogin>
                {mediaQuery ? <AnimationLogin /> : <></>}
                <FormLogin />
            </ContainerPageLogin>
        </>
    )
}
