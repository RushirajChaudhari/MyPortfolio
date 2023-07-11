import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAWW5KUqQVbH4TVhfP1TD26zFuipsTIxL8",
  authDomain: "rushi-portfolio.firebaseapp.com",
  projectId: "rushi-portfolio",
  storageBucket: "rushi-portfolio.appspot.com",
  messagingSenderId: "240052410370",
  appId: "1:240052410370:web:c8eb33232d7aaf43762f1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
