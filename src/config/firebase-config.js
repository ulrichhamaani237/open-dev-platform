// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4KDp9JTCatDpV4cPE8AUUBMqsgI2x6Eg",
  authDomain: "open-dev237.firebaseapp.com",
  projectId: "open-dev237",
  storageBucket: "open-dev237.firebasestorage.app",
  messagingSenderId: "248488483908",
  appId: "1:248488483908:web:740471d0a00c49bf187011",
  measurementId: "G-MF47N50LSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);