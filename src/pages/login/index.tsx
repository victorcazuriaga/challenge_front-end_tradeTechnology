import { AnimationLogin } from '../../components/AnimationLogin'
import { FormLogin } from '../../components/FormLogin'
import useMediaQuery from '../../shared/customHook/useMediaQuery'
import { ContainerPageLogin } from './style'
export const LoginPage = () => {
    const mediaQuery: boolean = useMediaQuery('(min-width: 767px)')

    return (
        <ContainerPageLogin>
            {mediaQuery ? <AnimationLogin /> : <></>}
            <FormLogin />
        </ContainerPageLogin>
    )
}
