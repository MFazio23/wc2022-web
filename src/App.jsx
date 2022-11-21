import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Box} from "@mui/material";
import TopNav from "./areas/TopNav/TopNav";
import Main from "./areas/Main/Main";
import {auth} from "./data/firebase-service";
import LoginDialog from "./areas/Login/LoginDialog";
import {getParties} from "./data/api-service";
import WCSnackbar from "./areas/Main/WCSnackbar";
import {listenForParties, listenForPoints} from "./data/data-repository";
import {mapParties} from "./data/party-handler";
import GA from "./data/google-analytics";


function App() {
    const [user, setUser] = useState(null);
    const [apiParties, setApiParties] = useState([]);
    const [firebaseParties, setFirebaseParties] = useState({});
    const [firebasePoints, setFirebasePoints] = useState({});
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [snackbarConfig, setSnackbarConfig] = useState({});
    const [isSnackbarShown, setIsSnackbarShown] = useState(false);

    const refreshParties = useCallback(async () => {
        if (user) {
            const apiParties = await getParties();

            setApiParties(apiParties || []);
        } else {
            setApiParties([]);
        }
    }, [user])

    GA.usePageTracking()

    useEffect(() => {
        listenForParties(setFirebaseParties)
    }, [])

    useEffect(() => {
        listenForPoints(setFirebasePoints)
    }, [])

    useEffect(() => {
        refreshParties();
    }, [refreshParties]);

    const parties = mapParties(apiParties, firebaseParties, firebasePoints)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setIsLoginModalOpen(false);
        });
        return () => unsubscribe();
    }, []);

    const handleAccountClick = async () => {
        if (user) {
            await auth.signOut();
            setApiParties([]);
            GA.trackSignOut();
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
            <Main user={user} parties={parties} isSignedIn={!!user} onOpenLoginModal={handleLoginModalOpen}
                  onDisplaySnackbar={handleDisplaySnackbar} onRefreshParties={refreshParties}
                  firebasePoints={firebasePoints}/>
            <LoginDialog open={isLoginModalOpen} onClose={handleLoginModalClose}/>
            <WCSnackbar open={isSnackbarShown} onClose={handleSnackbarHidden} snackbarConfig={snackbarConfig}/>
        </Box>
    )
}

export default App;
