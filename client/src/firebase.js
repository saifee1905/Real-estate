// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f682e.firebaseapp.com",
  projectId: "mern-estate-f682e",
  storageBucket: "mern-estate-f682e.appspot.com",
  messagingSenderId: "597205039844",
  appId: "1:597205039844:web:a72f3ec723dbe3d6bccaf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);