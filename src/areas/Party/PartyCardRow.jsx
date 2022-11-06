import {Grid, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@mui/material";
import {Teams} from "../../data/teams";
import "flag-icons/css/flag-icons.min.css";

const testTeams = {
    CAN: "Canada",
    FRA: "France",
    BEL: "Belgium",
    BRA: "Brazil",
    KSA: "Saudi Arabia",
    SUI: "Switzerland",
    USA: "United States"
}

const testTeamCount = 7

function PartyCardRow({player, onItemClicked}) {
    //TODO: Sort by score and remove the slicing.
    const teams = Object.entries(testTeams).map(([teamId, teamName]) => Teams[teamId]).slice(0, Math.floor(Math.random() * testTeamCount + 1));

    return <ListItem key={player.id} onClick={() => onItemClicked(player)}>
        <ListItemText sx={{maxWidth: "50%"}}>
            <Typography variant="body1">{player.name}</Typography>
        </ListItemText>
        <ListItemSecondaryAction sx={{maxWidth: "50%"}}>
            <Grid container justifyContent="end" wrap="wrap">
                {teams.map(team => team &&
                    <Grid item key={team.teamId} sx={{textAlign: "right"}}><span
                        className={`user-flag fi fi-${team.flagCode}`}></span></Grid>)}
            </Grid>
        </ListItemSecondaryAction>
    </ListItem>
}

export default PartyCardRow;