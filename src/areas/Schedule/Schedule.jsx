import {Box} from "@mui/material";
import ScheduleCard from "./ScheduleCard";

export default function Schedule({schedule}) {

    const scheduledDays = schedule ? schedule.reduce((days, match) => {
        const gameDay = match.matchDateTime.format('YYYYMMDD');
        const existingGameDay = (days[gameDay] || {});
        const gameDayMatches = existingGameDay.matches || [];
        gameDayMatches.push(match);

        const newGameDay = {
            ...existingGameDay,
            gameDate: match.matchDateTime.startOf('day'),
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
                    <ScheduleCard key={dayId}
                                  cardTitle={scheduledDay.gameDate?.format('dddd, MMM D, YYYY')}
                                  schedule={scheduledDay.matches}/>
                ))}
        </Box>
    )
}