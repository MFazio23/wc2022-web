import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";
import ListParties from "../Party/ListParties";
import {Box} from "@mui/material";
import Rankings from "../Rankings/Rankings";
import Schedule from "../Schedule/Schedule";

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
    const overviewElement = <Overview isSignedIn={isSignedIn} onOpenLoginModal={onOpenLoginModal}
                                      onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={onRefreshParties}/>

    const homeRender =
        parties && parties.length > 0 ? (
            <ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
                         onDisplaySnackbar={onDisplaySnackbar} schedule={schedule}/>) : overviewElement

    return (
        <Box sx={{margin: "0 auto", maxWidth: 960}}>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/overview' element={overviewElement}/>
                <Route path='/party'
                       element={<ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
                                             onDisplaySnackbar={onDisplaySnackbar}
                                             schedule={schedule}/>}/>
                <Route path='/schedule' element={<Schedule schedule={schedule} />}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/rankings' element={<Rankings points={firebasePoints}/>}/>
            </Routes>
        </Box>
    )
}

export default Main;