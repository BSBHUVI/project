
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdd3W-Kw8sx6LxepRK6u0ZYaoPmzB_ABE",
  authDomain: "e-commerce-c3b80.firebaseapp.com",
  projectId: "e-commerce-c3b80",
  storageBucket: "e-commerce-c3b80.appspot.com",
  messagingSenderId: "786305259808",
  appId: "1:786305259808:web:e24cc7dd3220d7d38fdf45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);