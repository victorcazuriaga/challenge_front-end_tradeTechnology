import Lottie from 'react-lottie'
import animationDataJson from '../../assets/LottieJson/126572-football-team-players.json'
import { ContainerAnimationLogin } from './style'
export const AnimationLogin = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <ContainerAnimationLogin>
            <div className="logo"> Logo </div>
            <div className="text">
                <h1>Olá Seja Bem-vindo !</h1>
            </div>
            <div className="animation">
                <Lottie options={defaultOptions} height={300} width={300} />
            </div>
        </ContainerAnimationLogin>
    )
}
