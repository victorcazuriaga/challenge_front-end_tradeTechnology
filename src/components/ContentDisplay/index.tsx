import { useState } from 'react'
import { ContainerContentDisplay, SwitchButton } from './style'
import { PlayerCard } from '../PlayerCard'
import { GoalData } from '../GoalChart'
type Section = 'players' | 'results' | 'chart'

export const ContentDisplay = () => {
    const [activeSection, setActiveSection] = useState<Section>('players')

    const players = [
        {
            id: 1,
            name: 'Jogador 1',
            age: 25,
            position: 'Atacante',
            nationality: 'brasil',
            photoUrl: 'https://example.com/player1.jpg',
        },
        {
            id: 2,
            name: 'Jogador 2',
            age: 28,
            position: 'Meio-Campista',
            nationality: 'canada',
            photoUrl: 'https://example.com/player2.jpg',
        },
        // Outros jogadores...
    ]

    const handleSwitchButtonClick = (section: Section) => {
        setActiveSection(section)
    }
    return (
        <ContainerContentDisplay>
            <div>
                <SwitchButton
                    active={activeSection === 'players'}
                    onClick={() => handleSwitchButtonClick('players')}
                >
                    Jogadores
                </SwitchButton>
                <SwitchButton
                    active={activeSection === 'results'}
                    onClick={() => handleSwitchButtonClick('results')}
                >
                    Tabela de Resultados
                </SwitchButton>
                <SwitchButton
                    active={activeSection === 'chart'}
                    onClick={() => handleSwitchButtonClick('chart')}
                >
                    Gráfico
                </SwitchButton>
            </div>
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    gap: '20px',
                    padding: '10px',
                }}
            >
                {activeSection === 'players' && (
                    <>
                        {players.map((player) => (
                            <PlayerCard key={player.id} player={player} />
                        ))}
                    </>
                )}
                {activeSection === 'results' && <div>b</div>}
                {activeSection === 'chart' && <GoalData />}
            </div>
        </ContainerContentDisplay>
    )
}
