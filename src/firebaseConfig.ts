import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeOgofw3XI43zasvgsjGeTYpPrbDPtInM",
  authDomain: "mypersonalwebsitecarlos.firebaseapp.com",
  projectId: "mypersonalwebsitecarlos",
  storageBucket: "mypersonalwebsitecarlos.firebasestorage.app",
  messagingSenderId: "644964421394",
  appId: "1:644964421394:web:d0f6c6a26e0ea74311adcb",
  measurementId: "G-4CJY59CJ5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };