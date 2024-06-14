import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBqIMxH1tKPGcIx7HG1p7_SiUfhjKe2TVc",
  authDomain: "deaf-learn-81e3b.firebaseapp.com",
  projectId: "deaf-learn-81e3b",
  storageBucket: "deaf-learn-81e3b.appspot.com",
  messagingSenderId: "955473265795",
  appId: "1:955473265795:web:5250848eb27359409047b6",
  measurementId: "G-0K360G5HBZ"
};



console.log(process.env.REACT_APP_FIREBASE_KEY)

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

