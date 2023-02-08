import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAA-O1sH337riXW1nsv3zRaHe9j7zYIjaY",
    authDomain: "fir-react-upload-c3f29.firebaseapp.com",
    databaseURL: "https://fir-react-upload-c3f29.firebaseio.com",
    projectId: "fir-react-upload-c3f29",
    storageBucket: "fir-react-upload-c3f29.appspot.com",
    messagingSenderId: "1008245440440",
    appId: "1:1008245440440:web:7994d1cb1f30308c15d94d",
    measurementId: "G-LNRLX8J2YR"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  const storage= firebase.storage();
  
  export {storage, firebase as default };