import React, {useState} from 'react';
import './App.css';
import {Box} from "@mui/material";
import TopNav from "./areas/TopNav/TopNav";
import Main from "./areas/Main/Main";


function App() {
    const [isSignedIn, setIsSignedIn] = useState(undefined)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    /*useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    if (!isSignedIn) {
        return (
            <div className="App">
                <header className="App-header">
                    <LoginModal open={isLoginModalOpen} setOpen={setIsLoginModalOpen} isSignedIn={isSignedIn}/>
                </header>
            </div>
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcome {auth.currentUser.displayName}! You are now signed in.</p>
                <Button onClick={() => auth.signOut()}>Sign Out</Button>
            </header>
        </div>
    )*/

    return (
        <Box>
            <TopNav />
            <Main />
        </Box>
    )

}

export default App;
