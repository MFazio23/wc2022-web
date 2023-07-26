import {Grid, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@mui/material";
import "flag-icons/css/flag-icons.min.css";
import {getFlag} from "../../data/teams";

function PartyCardRow({player, isUser, hideSpoilers, onPartyRowClicked}) {
    const totalPointsText = player.totalPoints === 1 ? `point` : `points`;
    return <ListItem className="party-card-row" key={player.id} onClick={() => onPartyRowClicked(player)}>
        <ListItemText sx={{maxWidth: "50%"}}>
            <Typography variant="body1" color={isUser ? "primary" : ""} fontWeight={isUser ? "bold" : "normal"}>{player.name}</Typography>
            <Typography variant="body2">{hideSpoilers ? "??" : player.totalPoints} {totalPointsText}</Typography>
        </ListItemText>
        <ListItemSecondaryAction sx={{maxWidth: "50%"}}>
            <Grid container className="party-card-row" justifyContent="end" wrap="wrap"
                  onClick={() => onPartyRowClicked(player)}>
                {player.teams.map(team => team &&
                    <Grid item key={team.teamId} sx={{textAlign: "right"}}>
                        {getFlag(team, team.points?.eliminated || false)}
                    </Grid>)}
            </Grid>
        </ListItemSecondaryAction>
    </ListItem>
}

export default PartyCardRow;