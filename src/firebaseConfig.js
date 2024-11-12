// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHUECeSKE6KGZdb8NXIzBMap95byPRCMw",
  authDomain: "telegram-mini-app-64365.firebaseapp.com",
  projectId: "telegram-mini-app-64365",
  storageBucket: "telegram-mini-app-64365.firebasestorage.app",
  messagingSenderId: "635416978187",
  appId: "1:635416978187:web:7311dd258ea8b9a323b80e",
  measurementId: "G-Q34WFMJQ8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };