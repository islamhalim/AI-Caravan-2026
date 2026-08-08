// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkOIaOFGGlrOcmEHNHtvtN5nNRY7Uwsv4",
  authDomain: "ai-caravan-registration.firebaseapp.com",
  projectId: "ai-caravan-registration",
  storageBucket: "ai-caravan-registration.firebasestorage.app",
  messagingSenderId: "324365637233",
  appId: "1:324365637233:web:5ac65b5560962c367fadd0",
  measurementId: "G-9VWFD3C991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
export const db = getFirestore(app);
