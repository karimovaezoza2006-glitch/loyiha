import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT7VO_5EKSVaz4UIx9PwCAdoioyPZEA1I",
  authDomain: "green-shop-89006.firebaseapp.com",
  projectId: "green-shop-89006",
  storageBucket: "green-shop-89006.firebasestorage.app",
  messagingSenderId: "908869814109",
  appId: "1:908869814109:web:f6a1d2c4571ec69fe60ab4",
  measurementId: "G-GBRN69G8PM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
