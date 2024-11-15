import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAAHwNsT3uNNP0UnrXHPO-0XKE-lUgEfM4",
    authDomain: "fir-auth-d2342.firebaseapp.com",
    projectId: "fir-auth-d2342",
    storageBucket: "fir-auth-d2342.firebasestorage.app",
    messagingSenderId: "564319340735",
    appId: "1:564319340735:web:159321978c78599db01e0a",
    measurementId: "G-9F4V27S2JQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

export { app, analytics };


