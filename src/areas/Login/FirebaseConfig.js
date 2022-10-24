import firebase from 'firebase/compat/app';
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider} from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyCHH0YgiqhKnxixL3fHDGIGtwFYSD1qoVg",
    authDomain: "wc2022-7a7c9.firebaseapp.com",
    databaseURL: "https://wc2022-7a7c9-default-rtdb.firebaseio.com",
    projectId: "wc2022-7a7c9",
    storageBucket: "wc2022-7a7c9.appspot.com",
    messagingSenderId: "353532727159",
    appId: "1:353532727159:web:6f97067da22d2747715b72",
    measurementId: "G-MNVY6QHEDD"
}

export const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
}

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);