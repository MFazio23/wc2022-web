import {Box} from "@mui/material";
import SortableTable from "../../components/SortableTable/SortableTable";

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

function Rankings() {
    const rankingTableItems = []
    return <Box>
        <SortableTable topTitle="Rankings" headers={headers} tableItems={rankingTableItems} />
    </Box>
}

export default Rankings;