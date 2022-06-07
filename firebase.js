import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfCYyu3ONxwBSb_lqkvgW2VQcX4sV3K7g",
  authDomain: "fir-auth-b0e38.firebaseapp.com",
  projectId: "fir-auth-b0e38",
  storageBucket: "fir-auth-b0e38.appspot.com",
  messagingSenderId: "377780193352",
  appId: "1:377780193352:web:6d4dd3eeeabb8839edf07d",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = getFirestore(app);
export { auth, db };
