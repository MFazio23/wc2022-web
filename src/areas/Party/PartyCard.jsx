import {Card, CardContent, CardHeader, List} from "@mui/material";
import PartyCardRow from "./PartyCardRow";

function PartyCard({party}) {
    const handleItemClick = (player) => {
        //TODO: Open the info window
        console.log("Card item clicked", player);
    }
    return <Card sx={{minWidth: 275, margin: "16px 8px"}}>
        <CardHeader
            title={party.name}
            subheader={`${party.code} - Owner: ${party.owner}`}/>
        <CardContent>
            <List>
                {party.players && party.players.map(player => <PartyCardRow key={player.id} player={player}
                                                                            onItemClicked={handleItemClick}/>)}
            </List>
        </CardContent>
    </Card>
}

export default PartyCard;