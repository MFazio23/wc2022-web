import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getDatabase} from "firebase/database";
import {
    getAuth,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    TwitterAuthProvider
} from "firebase/auth";

import config from "./wc2022-config";

const firebaseConfig = {
    apiKey: "AIzaSyCHH0YgiqhKnxixL3fHDGIGtwFYSD1qoVg",
    authDomain: "wc2022-7a7c9.firebaseapp.com",
    databaseURL: config.firebaseBaseUrl,
    projectId: "wc2022-7a7c9",
    storageBucket: "wc2022-7a7c9.appspot.com",
    messagingSenderId: "353532727159",
    appId: "1:353532727159:web:6f97067da22d2747715b72",
    measurementId: "G-MNVY6QHEDD"
};

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        /*FacebookAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID,*/
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
}

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export {
    analytics,
    auth,
    db,
    uiConfig,
}
