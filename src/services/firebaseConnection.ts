// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWzOkyyBRzgrvmsWeYmErK2AnX1nioxs",
  authDomain: "devlinks-873f9.firebaseapp.com",
  projectId: "devlinks-873f9",
  storageBucket: "devlinks-873f9.appspot.com",
  messagingSenderId: "161388326621",
  appId: "1:161388326621:web:814d250834e88019b73534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}