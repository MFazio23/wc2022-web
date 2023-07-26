import {Box} from "@mui/material";
import ScheduleCard from "./ScheduleCard";

export default function Schedule({schedule, hideSpoilers}) {

    const scheduledDays = schedule ? schedule.reduce((days, match) => {
        const gameDay = match.matchDateTime.local().format('YYYYMMDD');
        const existingGameDay = (days[gameDay] || {});
        const gameDayMatches = existingGameDay.matches || [];
        gameDayMatches.push(match);

        const newGameDay = {
            ...existingGameDay,
            gameDate: match.matchDateTime.local().startOf('day'),
            matches: gameDayMatches
        }
        return {
            ...days,
            [gameDay]: newGameDay,
        }
    }, {}) : {};

    return (
        <Box>
            {scheduledDays && Object.entries(scheduledDays)
                .sort(([a], [b]) => a - b)
                .map(([dayId, scheduledDay]) => (
                    <ScheduleCard key={dayId} date={dayId} hideSpoilers={hideSpoilers}
                                  cardTitle={scheduledDay.gameDate?.format('dddd, MMM D, YYYY')}
                                  schedule={scheduledDay.matches}/>
                ))}
        </Box>
    )
}