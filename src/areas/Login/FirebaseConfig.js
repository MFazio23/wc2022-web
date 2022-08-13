import firebase, {initializeApp} from 'firebase/compat/app';
import {getAuth} from 'firebase/auth'

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
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.OAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);