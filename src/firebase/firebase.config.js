// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFt-jR5fme8jmfaFXBL3HilDY4xZDtYkw",
  authDomain: "assignment-brandshop-client.firebaseapp.com",
  projectId: "assignment-brandshop-client",
  storageBucket: "assignment-brandshop-client.appspot.com",
  messagingSenderId: "74863787615",
  appId: "1:74863787615:web:0e79853d1d7007732965ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;