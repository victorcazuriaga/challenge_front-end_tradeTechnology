import { Copyright, ContainerFooter, Logo } from './style'

export const Footer = () => {
    return (
        <ContainerFooter>
            <Logo src="/path/to/logo.png" alt="Logo" />
            <Copyright>
                &copy; {new Date().getFullYear()} Victor Cazuriaga
            </Copyright>
        </ContainerFooter>
    )
}
