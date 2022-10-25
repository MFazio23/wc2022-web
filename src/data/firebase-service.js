import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCHH0YgiqhKnxixL3fHDGIGtwFYSD1qoVg",
    authDomain: "wc2022-7a7c9.firebaseapp.com",
    databaseURL: "https://wc2022-7a7c9-default-rtdb.firebaseio.com",
    projectId: "wc2022-7a7c9",
    storageBucket: "wc2022-7a7c9.appspot.com",
    messagingSenderId: "353532727159",
    appId: "1:353532727159:web:6f97067da22d2747715b72",
    measurementId: "G-MNVY6QHEDD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
