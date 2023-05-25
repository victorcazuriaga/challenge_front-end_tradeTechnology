import React, { useEffect, useMemo, useState } from 'react'
import { useTable, Column } from 'react-table'

interface TeamStatistics {
    team: string
    season: string
    league: string
}

interface StatisticsData {
    totalWins: number
    totalLosses: number
    totalDraws: number
    totalMatches: number
}

export const ResultsTable = () => {
    const [data, setData] = useState<StatisticsData[]>([])
//TODO: Conectar API para obter os dados necessário para gerar a tabela, podendo utilizar useQuery
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://api.example.com/statistics')
    //         const result = await response.json()

    //         const statisticsData = result.fixtures.map((fixture: any) => ({
    //             totalWins: fixture.wins.total,
    //             totalLosses: fixture.loses.total,
    //             totalDraws: fixture.draws.total,
    //             totalMatches: fixture.total.total,
    //         }))

    //         setData(statisticsData)
    //     }

    //     fetchData()
    // }, [])

    const columns = useMemo<Column<StatisticsData>[]>(
        () => [
            { Header: 'Team', accessor: 'team' },
            { Header: 'Season', accessor: 'season' },
            { Header: 'League', accessor: 'league' },
            { Header: 'Total Wins', accessor: 'totalWins' },
            { Header: 'Total Losses', accessor: 'totalLosses' },
            { Header: 'Total Draws', accessor: 'totalDraws' },
            { Header: 'Total Matches', accessor: 'totalMatches' },
        ],
        []
    )

//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//         useTable<StatisticsData>({ columns, data })

//     return (
//         <>
//             <table {...getTableProps()}>
//                 <thead>
//                     {headerGroups?.map((headerGroup) => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map((column) => (
//                                 <th {...column.getHeaderProps()}>
//                                     {column.render('Header')}
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map((row) => {
//                         prepareRow(row)
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map((cell) => (
//                                     <td {...cell.getCellProps()}>
//                                         {cell.render('Cell')}
//                                     </td>
//                                 ))}
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </>
//     )
// }
