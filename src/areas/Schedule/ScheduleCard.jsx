import {Card, CardContent, CardHeader, Grid} from "@mui/material";
import ScheduleCardRow from "./ScheduleCardRow";

export default function ScheduleCard({date, cardTitle, cardSubtitle, schedule}) {
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
                <Grid container>
                    {sortedSchedule.map(match => <ScheduleCardRow key={match.matchId || match.dateTime} match={match}/>)}
                </Grid>
            </CardContent>
        </Card>
    )
}