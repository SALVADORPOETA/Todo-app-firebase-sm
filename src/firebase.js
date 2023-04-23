// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKm_kCYhrNm2o72Xk_4G0cPfiLdJtPXw",
  authDomain: "todo-app-sm-40aa8.firebaseapp.com",
  projectId: "todo-app-sm-40aa8",
  storageBucket: "todo-app-sm-40aa8.appspot.com",
  messagingSenderId: "16292676281",
  appId: "1:16292676281:web:9cfedd0ce0de4df19dd168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)