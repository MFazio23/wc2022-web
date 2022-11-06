import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";
import ListParties from "../Party/ListParties";
import {Box} from "@mui/material";

function Main(props) {

    const homeRender = props.isSignedIn ?
        (<ListParties user={props.user} />) :
        (<Overview />)

    return (
        <Box sx={{margin: "0 auto", maxWidth: 960}}>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/login' element={<div>Login</div>}/>
                <Route path='/overview' element={<Overview />}/>
                <Route path='/party' element={<ListParties />}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/schedule' element={<div>Schedule</div>}/>
                <Route path='/privacy' element={<Privacy />}/>
                <Route path='/rankings' element={<div>Rankings</div>}/>
            </Routes>
        </Box>
    )
}

export default Main;