import {Grid, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from "@mui/material";
import React from "react";
import {getFlag} from "../../../data/teams";

export default function PlayerSummaryDialogRow({team, hideSpoilers}) {
    return (team &&
        <ListItem key={team.teamId} disablePadding>
            <ListItemIcon sx={{minWidth: 32}}>
                {getFlag(team, !hideSpoilers && (team.points?.eliminated || false), true)}
            </ListItemIcon>
            <ListItemText primary={team.teamName} secondary={`${hideSpoilers ? "??" : team.totalPoints || 0} points`}/>
            <ListItemSecondaryAction sx={{right: 0}}>
                <Grid container>
                    <Grid item sx={{textAlign: "right"}} xs={3}>
                        <span className="team-points">{`${(!hideSpoilers && team.points) ? team.points.wins : 0}W`}</span>
                    </Grid>
                    <Grid item sx={{textAlign: "right"}} xs={3}>
                        <span className="team-points">{`${(!hideSpoilers && team.points) ? team.points.ties : 0}D`}</span>
                    </Grid>
                    <Grid item sx={{textAlign: "right"}} xs={3}>
                        <span className="team-points">{`${(!hideSpoilers && team.points) ? team.points.goalsFor : 0}G`}</span>
                    </Grid>
                    <Grid item sx={{textAlign: "right"}} xs={3}>
                        <span className="team-points">{`${(!hideSpoilers && team.points) ? team.points.cleanSheets : 0}CS`}</span>
                    </Grid>
                </Grid>
            </ListItemSecondaryAction>
        </ListItem>
    )
}