import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa2wVOlSXu7Ay1P-0k54bJphLsUGr6cnM",
  authDomain: "phone-app-8ad5e.firebaseapp.com",
  projectId: "phone-app-8ad5e",
  storageBucket: "phone-app-8ad5e.appspot.com",
  messagingSenderId: "303861129607",
  appId: "1:303861129607:web:87bd9ec106bebf04363322",
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = app.firestore();

export { app, firestore };
