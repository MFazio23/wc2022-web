import {Grid, Typography} from "@mui/material";
import {getFlag, Teams} from "../../data/teams";
import {Stack} from "@mui/system";
import {getGameTimeText, getScoreText} from "../../data/schedule-handler";

export default function ScheduleCardRow({match}) {
    const homeTeam = Teams[match.homeTeam] || {teamName: match.homeTeam};
    const awayTeam = Teams[match.awayTeam] || {teamName: match.awayTeam};

    const scoreText = getScoreText(match);
    const gameTimeText = getGameTimeText(match);

    return (
        <Grid container justifyContent="space-between" mb={1}>
            <Grid container item xs={5} justifyContent="end" alignItems="center">
                <Typography variant="body1" display="inline">{homeTeam.teamName}</Typography>
                {getFlag(homeTeam, false)}
            </Grid>
            <Grid container item xs={2} justifyContent="center" alignItems="center">
                <Stack sx={{textAlign: 'center'}}>
                    <Typography variant="body1" fontSize="1.25em" lineHeight={1}>{scoreText}</Typography>
                    <Typography variant="body2">{gameTimeText}</Typography>
                </Stack>
            </Grid>
            <Grid container item xs={5} justifyContent="start" alignItems="center">
                {getFlag(awayTeam, false, true)}
                <Typography variant="body1" display="inline">{awayTeam.teamName}</Typography>
            </Grid>
        </Grid>
    )
}