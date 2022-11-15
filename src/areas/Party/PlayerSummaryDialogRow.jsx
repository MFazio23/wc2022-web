import {Grid, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from "@mui/material";
import React from "react";
import {getFlag} from "../../data/teams";

export default function PlayerSummaryDialogRow({team}) {
    return (team &&
        <ListItem key={team.teamId} disablePadding disableGutter>
            <ListItemIcon sx={{minWidth: 32}}>
                {getFlag(team, false, true)}
            </ListItemIcon>
            <ListItemText primary={team.teamName} secondary={`${team.stats ? team.stats.p : 0} points`}/>
            <ListItemSecondaryAction sx={{right: 0}}>
                <Grid container justifyContent="flex-end">
                    <Grid item sx={{textAlign: "right"}}>
                        <span className="team-points">{`${team.stats ? team.stats.w : 0}W`}</span>
                    </Grid>
                    <Grid item sx={{textAlign: "right"}}>
                        <span className="team-points">{`${team.stats ? team.stats.d : 0}D`}</span>
                    </Grid>
                    <Grid item sx={{textAlign: "right"}}>
                        <span className="team-points">{`${team.stats ? team.stats.g : 0}G`}</span>
                    </Grid>
                    <Grid item sx={{textAlign: "right"}}>
                        <span className="team-points">{`${team.stats ? team.stats.cs : 0}CS`}</span>
                    </Grid>
                </Grid>
            </ListItemSecondaryAction>
        </ListItem>
    )
}