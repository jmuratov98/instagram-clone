// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEjoo7CvOFuumhcdqhbGBKtL35T1hqT4g",
  authDomain: "instagram-clone-7c98c.firebaseapp.com",
  projectId: "instagram-clone-7c98c",
  storageBucket: "instagram-clone-7c98c.appspot.com",
  messagingSenderId: "86918049465",
  appId: "1:86918049465:web:04d8a06796b4cd8c86f568"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {
    app, db, storage
}
