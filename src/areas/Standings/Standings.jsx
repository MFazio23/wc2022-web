import {Box} from "@mui/material";
import StandingsGroupCard from "./StandingsGroupCard";

export default function Standings({standings, hideSpoilers}) {
    return (
        <Box sx={{margin: "0 auto", maxWidth: 960, textAlign: "center"}} >
            {standings && standings.map(groupStanding => {
                const groupName = groupStanding.groupName
                return (
                    <StandingsGroupCard key={groupName} groupName={groupName} standings={groupStanding.standings}
                                        hideSpoilers={hideSpoilers}/>
                )
            })}
        </Box>
    )
}