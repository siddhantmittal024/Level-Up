import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-PecXldOGH6mSVEpVsybxulXJNzlr_Ik",
  authDomain: "level-up-91fa3.firebaseapp.com",
  projectId: "level-up-91fa3",
  storageBucket: "level-up-91fa3.appspot.com",
  messagingSenderId: "24095331998",
  appId: "1:24095331998:web:6128cdfa5c62f51de74d8f",
  measurementId: "G-TSE37CBRC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);