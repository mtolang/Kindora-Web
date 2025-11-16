// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4OF4S7SobFzpvCp6G-LTpGztGVrEWGpo",
  authDomain: "kindora-baed6.firebaseapp.com",
  projectId: "kindora-baed6",
  storageBucket: "kindora-baed6.firebasestorage.app",
  messagingSenderId: "961497419837",
  appId: "1:961497419837:web:1f427c6418a65bb1a19a54",
  measurementId: "G-34V7NMZN4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
