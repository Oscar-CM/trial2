// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6qE9tl_aWp3UwTXrrUUcObu8pcLE8SLU",
  authDomain: "prime-nest.firebaseapp.com",
  projectId: "prime-nest",
  storageBucket: "prime-nest.firebasestorage.app",
  messagingSenderId: "147667126057",
  appId: "1:147667126057:web:8de1fbdc4cb167ce805938",
  measurementId: "G-802X7B2Z3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)