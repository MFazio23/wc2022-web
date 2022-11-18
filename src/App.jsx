import React, {useEffect, useState} from 'react';
import './App.css';
import {Box} from "@mui/material";
import TopNav from "./areas/TopNav/TopNav";
import Main from "./areas/Main/Main";
import {auth} from "./data/firebase-service";
import LoginDialog from "./areas/Login/LoginDialog";
import {updateApiKey} from "./data/api-service";
import WCSnackbar from "./areas/Main/WCSnackbar";


function App() {
    const [user, setUser] = useState(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [snackbarConfig, setSnackbarConfig] = useState({});
    const [isSnackbarShown, setIsSnackbarShown] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setIsLoginModalOpen(false);
            updateApiKey(user?.accessToken);
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

    const handleLoginModalOpen = () => {
        setIsLoginModalOpen(true)
    }

    const handleLoginModalClose = () => {
        setIsLoginModalOpen(false)
    }

    const handleDisplaySnackbar = (message, actionText, action) => {
        setSnackbarConfig({
            message,
            actionText,
            action,
        })
        setIsSnackbarShown(true)
    }

    const handleSnackbarHidden = () => {
        setIsSnackbarShown(false)
        setSnackbarConfig({});
    }

    return (
        <Box>
            <TopNav user={user} handleAccountClick={handleAccountClick}/>
            <Main user={user} isSignedIn={!!user} onOpenLoginModal={handleLoginModalOpen}
                  onDisplaySnackbar={handleDisplaySnackbar}/>
            <LoginDialog open={isLoginModalOpen} onClose={handleLoginModalClose}/>
            <WCSnackbar open={isSnackbarShown} onClose={handleSnackbarHidden} snackbarConfig={snackbarConfig} />
        </Box>
    )
}

export default App;
