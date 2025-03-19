// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAMy-ri8ydWe38GCHbipn-vyxUd7t4YI8",
  authDomain: "hridhyam-fb3ef.firebaseapp.com",
  projectId: "hridhyam-fb3ef",
  storageBucket: "hridhyam-fb3ef.firebasestorage.app",
  messagingSenderId: "356194571074",
  appId: "1:356194571074:web:cb89d100ab58011ba4aedb",
  measurementId: "G-LGQTL4GJQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);