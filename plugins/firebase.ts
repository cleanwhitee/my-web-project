// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4YFG3e1n81PmYHGcVE6cnjaM4Hfzcmvo",
  authDomain: "my-web-project2025.firebaseapp.com",
  projectId: "my-web-project2025",
  storageBucket: "my-web-project2025.firebasestorage.app",
  messagingSenderId: "351407598944",
  appId: "1:351407598944:web:fec994457bc35dcb2a8205",
  measurementId: "G-RENZF83JTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
