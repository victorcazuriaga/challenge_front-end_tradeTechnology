import styled from 'styled-components'

export const ContainerAnimationLogin = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0px 2px 25px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    width: 40rem;
    height: 100%;

    .logo {
        display: flex;
        flex: 1;
        width: 100%;
        padding: 2.1875rem;
    }
    .text {
        display: flex;
        justify-content: center;
        flex: 1;
        h1 {
            font: var(--heading-1);
            font-weight: bold;
            font-size: 40px;
        }
    }
    .animation {
        display: flex;
        flex: 3;
    }

    @media (min-width: 680px) {
    }
`
