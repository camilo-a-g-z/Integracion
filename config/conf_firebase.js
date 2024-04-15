import { firebase } from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCf_aXYyoc22QCPRMMdQf693794RqxwWOo",
    authDomain: "prestamorecursos-b7f68.firebaseapp.com",
    projectId: "prestamorecursos-b7f68",
    storageBucket: "prestamorecursos-b7f68.appspot.com",
    messagingSenderId: "429676744589",
    appId: "1:429676744589:web:e0a04a9efce399eee837c4",
    measurementId: "G-MTQ2TPBEMQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  export { db };