import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import ScheduleCardRow from "./ScheduleCardRow";

export default function ScheduleCard({date, cardTitle, cardSubtitle, schedule, hideSpoilers}) {
    const sortedSchedule = (schedule || [])
        .sort((a, b) => a?.matchDateTime?.diff && b?.matchDateTime?.diff
            ? a.matchDateTime.diff(b.matchDateTime)
            : 0
        );
    return (
        <Card className="wc-card" id={date}>
            <CardHeader
                title={cardTitle}
                subheader={cardSubtitle}/>
            <CardContent>
                {sortedSchedule.length === 0 &&
                    <Typography variant="body1" fontSize="1.25em" align="center" gutterBottom={true}>No matches scheduled.</Typography>}
                <Grid container>
                    {sortedSchedule.map(match => <ScheduleCardRow key={match.matchId || match.dateTime}
                                                                  match={match} hideSpoilers={hideSpoilers}/>)}
                </Grid>
            </CardContent>
        </Card>
    )
}