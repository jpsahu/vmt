// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv8ZYuR9AhbUVDnlcASxv1rp_9bDcFYZg",
  authDomain: "vidbird-3fe07.firebaseapp.com",
  projectId: "vidbird-3fe07",
  storageBucket: "vidbird-3fe07.appspot.com",
  messagingSenderId: "351976738714",
  appId: "1:351976738714:web:507037f5b13c23e984b423",
  measurementId: "G-0SZ17EFBLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");