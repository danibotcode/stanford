import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC00Xjz1x6ow5PlOirgIUTX-kgP5QkoTOw",
    authDomain: "stanford-cap-1cd8e.firebaseapp.com",
    databaseURL: "https://stanford-cap-1cd8e.firebaseio.com",
    projectId: "stanford-cap-1cd8e",
    storageBucket: "stanford-cap-1cd8e.appspot.com",
    messagingSenderId: "860518538143",
    appId: "1:860518538143:web:e4fa0d013e1fd34ee53baa",
    measurementId: "G-7JKGZJEX94"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();