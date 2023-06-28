// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgoK-HuvhEYggB2Q393wKLACqPxJoM5tI",
  authDomain: "my-app-c627b.firebaseapp.com",
  projectId: "my-app-c627b",
  storageBucket: "my-app-c627b.appspot.com",
  messagingSenderId: "794880451530",
  appId: "1:794880451530:web:975d9de18d3f3ecc62e533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);