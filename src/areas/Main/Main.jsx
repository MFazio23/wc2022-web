import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";
import ListParties from "../Party/ListParties";
import {Box} from "@mui/material";
import Rankings from "../Rankings/Rankings";
import Schedule from "../Schedule/Schedule";
import dayjs from "dayjs";

function Main(
    {
        user,
        parties,
        firebasePoints,
        schedule,
        isSignedIn,
        onRefreshParties,
        onOpenLoginModal,
        onDisplaySnackbar
    }
) {

    const now = dayjs();

    const todayDate = now.format('dddd, MMM D, YYYY')

    const todayGames = schedule.filter((match) => match.matchDateTime.local().isSame(now, 'day'))

    const overviewElement = <Overview isSignedIn={isSignedIn} onOpenLoginModal={onOpenLoginModal} todayDate={todayDate}
                                      todayGames={todayGames} onDisplaySnackbar={onDisplaySnackbar}
                                      onRefreshParties={onRefreshParties}/>

    const homeRender =
        parties && parties.length > 0 ? (
            <ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
                         onDisplaySnackbar={onDisplaySnackbar} todayDate={todayDate}
                         todayGames={todayGames}/>) : overviewElement


    return (
        <Box sx={{margin: "0 auto", maxWidth: 960}}>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/overview' element={overviewElement}/>
                <Route path='/party'
                       element={<ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
                                             onDisplaySnackbar={onDisplaySnackbar} todayDate={todayDate}
                                             todayGames={todayGames}/>}/>
                <Route path='/schedule' element={<Schedule schedule={schedule}/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/rankings' element={<Rankings points={firebasePoints}/>}/>
            </Routes>
        </Box>
    )
}

export default Main;