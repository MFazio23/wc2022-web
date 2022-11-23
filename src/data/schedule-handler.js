import dayjs from 'dayjs';

export const mapSchedule = (firebaseSchedule) =>
    Object.entries(firebaseSchedule).map(([matchId, match]) => {
        const matchDateTime = dayjs(match.dateTime)
        return {
            ...match,
            matchDateTime: matchDateTime,
        }
    })

export const getScoreText = (match) => {
    if (match.matchStatus === 'Played' || match.matchStatus === 'Live') {
        return `${match.homeScore}-${match.awayScore}`
    }
    return match?.matchDateTime?.format('h:mm') || "N/A";
}


export const getGameTimeText = (match) => {
    if (match.matchStatus === 'Played') return "FT";
    if (match.matchStatus === 'Live') return match.matchTime;
    return match?.matchDateTime?.format('a') || "N/A";
}