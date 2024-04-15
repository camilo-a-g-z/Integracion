// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf_aXYyoc22QCPRMMdQf693794RqxwWOo",
  authDomain: "prestamorecursos-b7f68.firebaseapp.com",
  projectId: "prestamorecursos-b7f68",
  storageBucket: "prestamorecursos-b7f68.appspot.com",
  messagingSenderId: "429676744589",
  appId: "1:429676744589:web:e0a04a9efce399eee837c4",
  measurementId: "G-MTQ2TPBEMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);