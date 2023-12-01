// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiGwK6DxATO95sMS4xkxe13YEB4JrX_T0",
  authDomain: "mandatory1-aa1ca.firebaseapp.com",
  projectId: "mandatory1-aa1ca",
  storageBucket: "mandatory1-aa1ca.appspot.com",
  messagingSenderId: "769363298674",
  appId: "1:769363298674:web:be5f514b00d37a71ec75eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export { app, database }