export const mapStandings = (firebaseStandings, firebasePoints) =>
    Object.entries(firebaseStandings).map(([groupName, standingsGroup]) => ({
        groupName: groupName,
        standings: standingsGroup.standings.map((teamId, index) => {
            return {
                teamId: teamId,
                ranking: index,
                points: firebasePoints[teamId],
            }
        }).filter(team => !!team).sort((a, b) => a.ranking - b.ranking)
    }))