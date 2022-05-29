import Firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9i40GSmJA572LsQPwWr66mPTgZR5mwhg",
  authDomain: "loyaltyapp-acbaf.firebaseapp.com",
  projectId: "loyaltyapp-acbaf",
  storageBucket: "loyaltyapp-acbaf.appspot.com",
  messagingSenderId: "911142687083",
  appId: "1:911142687083:web:d205c3b07297565787fc2e",
  measurementId: "G-9J1PCJ3KHR",
};

const app = Firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const db= app.firestore();
export { auth };
