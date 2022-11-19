import {Teams} from "./teams";
import {calculateTotalPointsForPlayer, calculateTotalPointsForTeam} from "./calculations";

export const mapPlayers = (players, firebasePoints) => Object
    .entries(players || {})
    .map(([_, player]) => {
        const teams = Object.entries(player?.teams || {})
            .map(([teamId, _]) => {
                const team = Teams[teamId];
                const points = firebasePoints[teamId];

                return {
                    ...team,
                    totalPoints: calculateTotalPointsForTeam(points),
                    points: firebasePoints[teamId]
                }
            }).sort((a, b) => b.totalPoints - a.totalPoints);

        return {
            ...player,
            totalPoints: calculateTotalPointsForPlayer(teams),
            teams: teams,
        }
    }).sort((a, b) => b.totalPoints - a.totalPoints);

export const mapParties = (apiParties, firebaseParties, firebasePoints) => (apiParties &&
    firebaseParties &&
    Object
        .entries(firebaseParties)
        .filter(([partyCode, _]) => apiParties.find(apiParty => apiParty.code === partyCode))
        .map(([_, party]) => ({
            ...party,
            owner: party.owner,
            players: mapPlayers(party.players, firebasePoints)
        }))
) || [];