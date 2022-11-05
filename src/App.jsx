import React, {useEffect, useState} from 'react';
import './App.css';
import {Box} from "@mui/material";
import TopNav from "./areas/TopNav/TopNav";
import Main from "./areas/Main/Main";
import {auth} from "./data/firebase-service";
import LoginModal from "./areas/Login/LoginModal";
import {updateApiKey} from "./data/api-service";


function App() {
    const [user, setUser] = useState(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setIsLoginModalOpen(false);
            updateApiKey(user.accessToken);
        });
        return () => unsubscribe();
    }, []);

    const handleAccountClick = async () => {
        if (user) {
            await auth.signOut();
        } else {
            setIsLoginModalOpen(true)
        }
    }

    return (
        <Box>
            <TopNav user={user} handleAccountClick={handleAccountClick}/>
            <Main user={user} isSignedIn={!!user}/>
            <LoginModal open={isLoginModalOpen} />
        </Box>
    )
}

export default App;
