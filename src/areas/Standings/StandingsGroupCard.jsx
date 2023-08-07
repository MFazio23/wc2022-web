import {Box, Card, CardContent, CardHeader, Grid, List, Typography} from "@mui/material";
import StandingsGroupCardRow from "./StandingsGroupCardRow";
import React from "react";

export default function StandingsGroupCard({groupName, standings, hideSpoilers}) {
    return (
        <Box display="inline-block">
            <Card className="wc-card">
                <CardHeader
                    title={groupName}/>
                <CardContent>
                    <List>
                        <Grid container>
                            <Grid item xs={2} />
                            <Grid item xs={2} />
                            <Grid item xs={3} />
                            <Grid item xs={1}>
                                <Typography textAlign="center">GP</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography textAlign="center">W</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography textAlign="center">D</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography textAlign="center">L</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography textAlign="center">GD</Typography>
                            </Grid>
                        </Grid>
                        {standings &&
                            standings.map(standing => <StandingsGroupCardRow key={standing.teamId}
                                                                             standing={standing}
                                                                             hideSpoilers={hideSpoilers}/>)}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}