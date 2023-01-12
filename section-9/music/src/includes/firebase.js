import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUiKjJHf2aDmF9PZDE82r6BMVuMC4ID5A",
  authDomain: "music-4ddea.firebaseapp.com",
  projectId: "music-4ddea",
  storageBucket: "music-4ddea.appspot.com",
  appId: "1:11970667896:web:88a6c3253d689fbba7d48d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
