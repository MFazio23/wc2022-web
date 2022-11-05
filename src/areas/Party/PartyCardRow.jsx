import {Grid, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import {Teams} from "../../data/teams";

const testTeams = {
    CAN: "Canada",
    CHI: "Chile",
    FRA: "France",
    USA: "United States"
}

function PartyCardRow({player}) {
    //TODO: Sort by score
    const teams = Object.entries(testTeams).map(([teamId, teamName]) => Teams[teamId]);
    return <ListItem>
        <ListItemText>
            {player.name}
        </ListItemText>
        <ListItemSecondaryAction>
            <Grid container>
                {JSON.stringify(teams, null, 2)}
            </Grid>
        </ListItemSecondaryAction>
    </ListItem>
}

export default PartyCardRow;