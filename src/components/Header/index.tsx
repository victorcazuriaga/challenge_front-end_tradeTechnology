import { HeaderContainer, Logo, LogoutButton } from './style'
interface HeaderProps {
    onLogout: () => void
}
export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
    return (
        <HeaderContainer>
            <Logo src={'logo'} alt="Logo" />
            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </HeaderContainer>
    )
}
