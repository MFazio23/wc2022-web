import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";
import ListParties from "../Party/ListParties";
import {Box} from "@mui/material";
import Rankings from "../Rankings/Rankings";

function Main({user, isSignedIn, onOpenLoginModal}) {

    const overviewElement = <Overview isSignedIn={isSignedIn} onOpenLoginModal={onOpenLoginModal}/>

    const homeRender = isSignedIn ? (<ListParties user={user}/>) : overviewElement

    return (
        <Box sx={{margin: "0 auto", maxWidth: 960}}>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/login' element={<div>Login</div>}/>
                <Route path='/overview' element={overviewElement}/>
                <Route path='/party' element={<ListParties/>}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/schedule' element={<div>Schedule</div>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/rankings' element={<Rankings/>}/>
            </Routes>
        </Box>
    )
}

export default Main;