// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCld3_EMo_IdjKaif0FvsYEeLuVAtyJvew",
  authDomain: "halo-8f292.firebaseapp.com",
  projectId: "halo-8f292",
  storageBucket: "halo-8f292.firebasestorage.app",
  messagingSenderId: "459829431558",
  appId: "1:459829431558:web:7853750c4e45cce0ba6287",
  measurementId: "G-PWJD7VHBMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);
if (!app) {
  console.error('Firebase app failed to initialize');
}
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
console.log('Auth initialized:', auth);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
console.log('Google provider initialized:', googleProvider);

export default app;