// Firebase.js
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig'; // Assuming you store the Firebase config in a separate file

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
