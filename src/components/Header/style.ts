import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

export const Logo = styled.img`
    height: 40px;
    width: auto;
`

export const LogoutButton = styled.button`
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`
