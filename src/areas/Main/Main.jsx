import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";
import ListParties from "../Party/ListParties";
import {Box, Fab} from "@mui/material";
import Rankings from "../Rankings/Rankings";
import Schedule from "../Schedule/Schedule";
import dayjs from "dayjs";
import {ArrowUpward} from "@mui/icons-material";
import React from "react";

function Main(
    {
        user,
        parties,
        firebasePoints,
        hideSpoilers,
        schedule,
        isSignedIn,
        onRefreshParties,
        onOpenLoginModal,
        onDisplaySnackbar
    }
) {

    const now = dayjs();

    const dayId = now.format('YYYYMMDD');

    const todayDate = now.format('dddd, MMM D, YYYY')

    const todayGames = schedule.filter((match) => match.matchDateTime.local().isSame(now, 'day'))

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const overviewElement = <Overview isSignedIn={isSignedIn} onOpenLoginModal={onOpenLoginModal} scheduleDate={dayId}
                                      todayDate={todayDate} todayGames={todayGames}
                                      onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={onRefreshParties}/>

    const homeRender =
        parties && parties.length > 0 ? (
            <ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
                         onDisplaySnackbar={onDisplaySnackbar} scheduleDate={dayId} hideSpoilers={hideSpoilers}
                         todayDate={todayDate} todayGames={todayGames}/>) : overviewElement


    return (
        <Box sx={{margin: "0 auto", maxWidth: 960}}>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/overview' element={overviewElement}/>
                <Route path='/party'
                       element={<ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
                                             onDisplaySnackbar={onDisplaySnackbar} scheduleDate={dayId}
                                             hideSpoilers={hideSpoilers} todayDate={todayDate}
                                             todayGames={todayGames}/>}/>
                <Route path='/schedule' element={<Schedule hideSpoilers={hideSpoilers} schedule={schedule}/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/rankings' element={<Rankings hideSpoilers={hideSpoilers} points={firebasePoints}/>}/>
            </Routes>

            <Fab className="fab" color="primary" onClick={scrollToTop} sx={{
                position: 'fixed',
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2),
            }}>
                <ArrowUpward/>
            </Fab>
        </Box>
    )
}

export default Main;