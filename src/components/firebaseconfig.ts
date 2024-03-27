// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnibdCC6c97B25ZM4bR1CV0eGwohJ0404",
  authDomain: "newsapp-67666.firebaseapp.com",
  projectId: "newsapp-67666",
  storageBucket: "newsapp-67666.appspot.com",
  messagingSenderId: "39745932221",
  appId: "1:39745932221:web:7f781a9edffb4da69b20d4",
  measurementId: "G-7308PE3JE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;