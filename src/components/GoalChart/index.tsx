import axios from 'axios'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

interface GoalData {
    time: string
    goals: number
}
export const GoalData = () => {
    const [goalData, setGoalData] = useState<GoalData[]>([])

    const getTimeLabels = () => {
        return goalData.map((data) => data.time)
    }

    const getGoalValues = () => {
        return goalData.map((data) => (data.goals !== null ? data.goals : 0))
    }

    const data = {
        labels: getTimeLabels(),
        datasets: [
            {
                label: 'Gols Marcados',
                data: getGoalValues(),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    }

    return (
        <div>
            <h2>Quantidade de Gols Marcados por Tempo de Jogo</h2>
            <Line data={data} />
        </div>
    )
}
