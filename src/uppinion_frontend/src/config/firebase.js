// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //PRODUCTION
  // apiKey: "AIzaSyAqs2B_DD5EG5u8gcYxDDwM21MWwLPTerE",
  // authDomain: "uppinion-prod.firebaseapp.com",
  // projectId: "uppinion-prod",
  // storageBucket: "uppinion-prod.appspot.com",
  // messagingSenderId: "184026671523",
  // appId: "1:184026671523:web:65c5097f62701d3fad1216"

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
