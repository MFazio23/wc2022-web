import {Box} from "@mui/material";
import SortableTable from "../../components/SortableTable/SortableTable";
import {useEffect, useState} from "react";
import {listenForRankings} from "../../data/data-repository";
import {TeamList} from "../../data/teams";
import {calculateTotalPointsForTeam} from "../../data/calculations";

// are we removing 'elo' from this table?
const headers = [
    {
        id: "teamName",
        label: "Team Name",
        numeric: false,
    },
    {
        id: "fifa",
        label: "FIFA",
        numeric: true,
    },
    {
        id: "elo",
        label: "ELO",
        numeric: true,
    },
    {
        id: "wins",
        label: "W",
        numeric: true,
    },
    {
        id: "draws",
        label: "D",
        numeric: true,
    },
    {
        id: "goals",
        label: "G",
        numeric: true,
    },
    {
        id: "cleanSheets",
        label: "CS",
        numeric: true,
    },
    {
        id: "points",
        label: "P",
        numeric: true,
    },
]

function Rankings({points}) {
    const [firebaseRankings, setFirebaseRankings] = useState({});
    useEffect(() => {
        listenForRankings(setFirebaseRankings)
    }, [])

    if (!firebaseRankings || !points) {
        return <Box></Box>
    }

    const rankingTableItems = TeamList.map(team => {
        const teamRanking = firebaseRankings[team.teamId];
        const teamPoints = points[team.teamId];

        return [
            {
                id: 'teamName',
                value: team.teamName,
                numeric: false
            },
            {
                id: 'fifa',
                value: teamRanking?.fifa,
                numeric: true
            },
            {
                id: 'elo',
                value: teamRanking?.elo,
                numeric: true
            },
            {
                id: 'wins',
                value: teamPoints?.wins,
                numeric: true
            },
            {
                id: 'draws',
                value: teamPoints?.ties,
                numeric: true
            },
            {
                id: 'goals',
                value: teamPoints?.goalsFor,
                numeric: true
            },
            {
                id: 'cleanSheets',
                value: teamPoints?.cleanSheets,
                numeric: true
            },
            {
                id: 'points',
                value: calculateTotalPointsForTeam(teamPoints),
                numeric: true
            },
        ]
    })

    return <Box>
        <SortableTable topTitle="Rankings and Stats" headers={headers} tableItems={rankingTableItems}/>
    </Box>
}

export default Rankings;