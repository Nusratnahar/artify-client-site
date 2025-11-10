// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHhtXHr-na-uibEUDV83aW5fKtj-_ew5Y",
  authDomain: "artify-creative-artwork.firebaseapp.com",
  projectId: "artify-creative-artwork",
  storageBucket: "artify-creative-artwork.firebasestorage.app",
  messagingSenderId: "742397694451",
  appId: "1:742397694451:web:278236dd94bc5c4c660286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
