// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAplrBAppLzU_Rw66PVSoeQClUgPVq9yl8",
    authDomain: "movie-28.firebaseapp.com",
    projectId: "movie-28",
    storageBucket: "movie-28.appspot.com",
    messagingSenderId: "318268110305",
    appId: "1:318268110305:web:8375895449424c78da0ea0",
    measurementId: "G-VWL8RHB79Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
