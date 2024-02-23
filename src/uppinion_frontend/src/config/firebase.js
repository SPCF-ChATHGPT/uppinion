// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //PRODUCTION
  // apiKey: "AIzaSyAeaSSns6sLx5JjqjA7SP4aRuxXtwAGtKQ",
  // authDomain: "capt-ed.firebaseapp.com",
  // projectId: "capt-ed",
  // storageBucket: "capt-ed.appspot.com",
  // messagingSenderId: "540328867893",
  // appId: "1:540328867893:web:11bf437601a2d21453d97c",

  //DEVELOPMENT
  apiKey: "AIzaSyDW_tj-3sAYhMxGZIkrHJ7_LNjMoh6kw6I",
  authDomain: "uppinion-dev.firebaseapp.com",
  projectId: "uppinion-dev",
  storageBucket: "uppinion-dev.appspot.com",
  messagingSenderId: "4753600509",
  appId: "1:4753600509:web:d4c8fd307c120056f47394",
  measurementId: "G-4F4SEB0G7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, auth };
