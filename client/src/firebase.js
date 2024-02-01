// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4bc64.firebaseapp.com",
  projectId: "mern-blog-4bc64",
  storageBucket: "mern-blog-4bc64.appspot.com",
  messagingSenderId: "437134193627",
  appId: "1:437134193627:web:10e9c9c5c2c88878156dfe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
