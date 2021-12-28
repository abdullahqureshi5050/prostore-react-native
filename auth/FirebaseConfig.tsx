// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Path 
// Login > select your created "WEB" Project > Project Overview > Project Settings > General > Your App 
const firebaseConfig = {
  apiKey: "AIzaSyC7KRW8IvW-_YmQrmxlTS8g5oyHPJsXkEk",
  authDomain: "prostorepk-21db3.firebaseapp.com",
  projectId: "prostorepk-21db3",
  storageBucket: "prostorepk-21db3.appspot.com",
  messagingSenderId: "434194598621",
  appId: "1:434194598621:web:f3c2bc2ad6a37811cbe934",
  measurementId: "G-CQP85NC5VK"
};

// Initialize Firebase
export const FirebaseConfig = ()=> initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);