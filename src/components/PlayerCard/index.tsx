import { CardContainer, PlayerInfo, PlayerName, PlayerPhoto } from './style'

export const PlayerCard = ({ player }: any) => {
    const { name, age, position, photoUrl, nationality } = player
    return (
        <CardContainer>
            <PlayerPhoto src={photoUrl} alt={name} />
            <PlayerName>{name}</PlayerName>
            <PlayerInfo>Idade: {age}</PlayerInfo>
            <PlayerInfo>Posição: {position}</PlayerInfo>
            <PlayerInfo>Nacionalidade: {nationality}</PlayerInfo>
        </CardContainer>
    )
}
