export function calculateTotalPointsForTeam(points) {
    return points ? points.wins * 3 + points.cleanSheets * 2 + points.ties + points.goalPoints : null;
}

export function calculateTotalPointsForPlayer(teams) {
    return teams.reduce((total, team) => total + team.totalPoints, 0)
}