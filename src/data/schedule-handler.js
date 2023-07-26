import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const mapSchedule = (firebaseSchedule) =>
    Object.entries(firebaseSchedule).map(([_, match]) => {
        const matchDateTime = dayjs.utc(match.dateTime)
        return {
            ...match,
            matchDateTime: matchDateTime,
        }
    })

export const getScoreText = (match, hideSpoilers) => {
    if (!hideSpoilers && (match.matchStatus === 'Played' || match.matchStatus === 'Live')) {
        return `${match.homeScore}-${match.awayScore}`
    }
    return match?.matchDateTime?.local()?.format('h:mm') || "N/A";
}


export const getGameTimeText = (match, hideSpoilers) => {
    if (!hideSpoilers && match.matchStatus === 'Played') return "FT";
    if (!hideSpoilers && match.matchStatus === 'Live') return match.matchTime;
    return match?.matchDateTime?.local()?.format('a') || "N/A";
}