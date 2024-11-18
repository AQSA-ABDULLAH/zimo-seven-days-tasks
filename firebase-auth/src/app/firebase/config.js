// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";  // Import Firestore functions
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGr3sYqqU2OK7g3r5wVvBpt38CJlQgae4",
  authDomain: "transport-hub-a77ee.firebaseapp.com",
  projectId: "transport-hub-a77ee",
  storageBucket: "transport-hub-a77ee.appspot.com",
  messagingSenderId: "1097600057992",
  appId: "1:1097600057992:web:8e9afd51115b45d813953d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

export { app, storage, auth, firestore, analytics, doc, getDoc, setDoc };