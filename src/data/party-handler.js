import {Teams} from "./teams";
import {calculateTotalPointsForPlayer, calculateTotalPointsForTeam} from "./calculations";

export const mapPlayers = (players, firebasePoints, hideSpoilers) =>
    Object
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
                }).sort((a, b) => hideSpoilers ? b.teamName : b.totalPoints - hideSpoilers ? a.teamName : a.totalPoints);

            const p = {
                ...player,
                totalPoints: calculateTotalPointsForPlayer(teams),
                teams: teams,
            }

            console.log(p.name, hideSpoilers)

            return p;
        }).sort((a, b) => hideSpoilers ? b.name : b.totalPoints - hideSpoilers ? a.name : a.totalPoints);

export const mapParties = (apiParties, firebaseParties, firebasePoints, hideSpoilers) => (apiParties &&
    firebaseParties &&
    Object
        .entries(firebaseParties)
        .filter(([partyCode, _]) => apiParties.find(apiParty => apiParty.code === partyCode))
        .map(([_, party]) => ({
            ...party,
            owner: party.owner,
            players: mapPlayers(party.players, firebasePoints, hideSpoilers)
        }))
) || [];