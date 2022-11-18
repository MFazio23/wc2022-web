import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";
import ListParties from "../Party/ListParties";
import {Box} from "@mui/material";
import Rankings from "../Rankings/Rankings";
import {useCallback, useEffect, useState} from "react";
import {listenForParties, listenForPoints} from "../../data/data-repository";
import {getParties} from "../../data/api-service";
import {Teams} from "../../data/teams";
import {calculateTotalPointsForPlayer, calculateTotalPointsForTeam} from "../../data/calculations";

function Main({user, isSignedIn, onOpenLoginModal, onDisplaySnackbar}) {
    const [apiParties, setApiParties] = useState([]);
    const [firebaseParties, setFirebaseParties] = useState({});
    const [firebasePoints, setFirebasePoints] = useState({});

    const refreshParties = useCallback(async () => {
        if (user) {
            const apiParties = await getParties(user.userId);

            setApiParties(apiParties || []);
        }
    }, [user])

    useEffect(() => {
        listenForParties(setFirebaseParties)
    }, [])

    useEffect(() => {
        listenForPoints(setFirebasePoints)
    }, [])

    useEffect(() => {
        refreshParties();
    }, [refreshParties]);

    const mapPlayers = (players) =>
        Object.entries(players || {}).map(([_, player]) => {
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

    const parties = (apiParties &&
        firebaseParties &&
        Object
            .entries(firebaseParties)
            .filter(([partyCode, _]) => apiParties.find(apiParty => apiParty.code === partyCode))
            .map(([_, party]) => ({
                ...party,
                owner: party.owner,
                players: mapPlayers(party.players)
            }))
    ) || [];

    const overviewElement = <Overview isSignedIn={isSignedIn} onOpenLoginModal={onOpenLoginModal}
                                      onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={refreshParties}/>

    const homeRender =
        parties && parties.length > 0 ? (
            <ListParties user={user} parties={parties} onRefreshParties={refreshParties}
                         onDisplaySnackbar={onDisplaySnackbar}/>) : overviewElement

    return (
        <Box sx={{margin: "0 auto", maxWidth: 960}}>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/login' element={<div>Login</div>}/>
                <Route path='/overview' element={overviewElement}/>
                <Route path='/party'
                       element={<ListParties user={user} parties={parties} onRefreshParties={refreshParties}
                                             onDisplaySnackbar={onDisplaySnackbar}/>}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/schedule' element={<div>Schedule</div>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/rankings' element={<Rankings/>}/>
            </Routes>
        </Box>
    )
}

export default Main;