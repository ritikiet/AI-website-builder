// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-website-993a1.firebaseapp.com",
  projectId: "ai-website-993a1",
  storageBucket: "ai-website-993a1.firebasestorage.app",
  messagingSenderId: "177748138734",
  appId: "1:177748138734:web:7b954ef6c88917309531ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
