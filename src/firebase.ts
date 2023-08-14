// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADDxhJ_gNQwTzxVKzpXPXXDhkjEKN7l5I",
  authDomain: "mmmo2-c5a8a.firebaseapp.com",
  projectId: "mmmo2-c5a8a",
  storageBucket: "mmmo2-c5a8a.appspot.com",
  messagingSenderId: "1057553360891",
  appId: "1:1057553360891:web:92eb1c43037e0d05eacd5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
