import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQBQZZ2fCL5125UAsYkApZ2nYeAt-AfXs",
  authDomain: "car-servicing-707ec.firebaseapp.com",
  projectId: "car-servicing-707ec",
  storageBucket: "car-servicing-707ec.appspot.com",
  messagingSenderId: "822241046457",
  appId: "1:822241046457:web:9c3f14cc72edb9bc299068",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;