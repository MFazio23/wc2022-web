import {Route, Routes} from "react-router-dom";
import Privacy from "../About/Privacy";
import Overview from "./Overview";

function Main(props) {

    const homeRender = props.isSignedIn ?
        (<div>ListParties</div>) :
        (<Overview />)

    return (
        <main>
            <Routes>
                <Route path='/' element={homeRender}/>
                <Route path='/login' element={<div>Login</div>}/>
                <Route path='/overview' element={<Overview />}/>
                <Route path='/party' element={<div>ListParties</div>}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/schedule' element={<div>Schedule</div>}/>
                <Route path='/privacy' element={<Privacy />}/>
                <Route path='/rankings' element={<div>Rankings</div>}/>
            </Routes>
        </main>
    )
}

export default Main;