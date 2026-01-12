
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAKBrOeQPXYwkicBRjSQIRF9M7QPTf1v_o",
  authDomain: "portfolio-cc403.firebaseapp.com",
  projectId: "portfolio-cc403",
  storageBucket: "portfolio-cc403.firebasestorage.app",
  messagingSenderId: "963239524620",
  appId: "1:963239524620:web:0e81cf9724b374af01b129",
  measurementId: "G-LTV50176TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);