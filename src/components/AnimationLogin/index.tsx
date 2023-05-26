import animationDataJson from '../../assets/LottieJson/126572-football-team-players.json'
import Lottie from 'lottie-react'
import { ContainerAnimationLogin } from './style'
export const AnimationLogin = () => {
    return (
        <ContainerAnimationLogin>
            <div className="logo"> Logo </div>
            <div className="text">
                <h1>Olá Seja Bem-vindo !</h1>
            </div>
            <div className="animation">
                <Lottie
                    loop={true}
                    animationData={animationDataJson}
                    autoplay={true}
                    style={{ width: '400px', height: '400px', display: 'flex' }}
                />
            </div>
        </ContainerAnimationLogin>
    )
}
