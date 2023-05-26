import styled from 'styled-components'

interface Player {
    id: number
    name: string
    age: number
    position: string
    photoUrl: string
}

interface PlayerCardProps {
    player: Player
}

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
`

export const PlayerPhoto = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
`

export const PlayerName = styled.h3`
    margin-top: 8px;
`

export const PlayerInfo = styled.p`
    margin-top: 4px;
`
