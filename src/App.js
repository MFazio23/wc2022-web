import React, {useState, useEffect} from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import LoginModal from './areas/Login/LoginModal';
import {auth} from './areas/Login/FirebaseConfig';


function App() {
    const [isSignedIn, setIsSignedIn] = useState(undefined)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);

            user.getIdToken().then(result => {
                console.log("User ID token", result);
            })
        });
        return () => unsubscribe();
    }, []);

    if (!isSignedIn) {
        return (
            <div className="App">
                <header className="App-header">
                    <LoginModal isSignedIn={isSignedIn}/>
                </header>
            </div>
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcome {auth.currentUser.displayName}! You are now signed in.</p>
                <a onClick={() => auth.signOut()}>Sign Out</a>
            </header>
        </div>
    )

}

export default App;
