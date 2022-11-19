import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";
import ListParties from "../Party/ListParties";
import {Box} from "@mui/material";
import Rankings from "../Rankings/Rankings";

function Main({user, parties, isSignedIn, onRefreshParties, onOpenLoginModal, onDisplaySnackbar}) {


    const overviewElement = <Overview isSignedIn={isSignedIn} onOpenLoginModal={onOpenLoginModal}
                                      onDisplaySnackbar={onDisplaySnackbar} onRefreshParties={onRefreshParties}/>

    const homeRender =
        parties && parties.length > 0 ? (
            <ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
                         onDisplaySnackbar={onDisplaySnackbar}/>) : overviewElement

    return (
        <Box sx={{margin: "0 auto", maxWidth: 960}}>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/overview' element={overviewElement}/>
                <Route path='/party'
                       element={<ListParties user={user} parties={parties} onRefreshParties={onRefreshParties}
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