import {Grid, Typography} from "@mui/material";
import React from "react";
import {getFlag, Teams} from "../../data/teams";

export default function StandingsGroupCardRow({standing, hideSpoilers}) {
    const team = Teams[standing.teamId];
    const gamesPlayed = standing.points?.wins + standing.points?.ties + standing.points?.losses;
    const goalDifferential = standing.points?.goalsFor - standing.points?.goalsAgainst;
    return (
        <Grid container>
            <Grid item xs={2}>
                <Typography>{`${!hideSpoilers ? standing.ranking : '-'}`}</Typography>
            </Grid>
            <Grid item xs={2}>
                {getFlag(team, !hideSpoilers && (standing.points?.eliminated || false), false, true)}
            </Grid>
            <Grid item xs={3}>
                <Typography>{standing.teamId}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography textAlign="center">{gamesPlayed}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography textAlign="center">{standing.points?.wins}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography textAlign="center">{standing.points?.ties}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography textAlign="center">{standing.points?.losses}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography textAlign="center">{goalDifferential}</Typography>
            </Grid>
        </Grid>
    )
}