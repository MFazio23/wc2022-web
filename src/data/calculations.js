export function calculateTotalPointsForTeam(points) {
    return points ? points.wins * 3 + points.cleanSheets * 2 + points.ties + points.goalsFor : 0;
}

export function calculateTotalPointsForPlayer(teams) {
    return teams.reduce((total, team) => total + team.totalPoints, 0)
}