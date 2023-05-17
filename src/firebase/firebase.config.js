// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMcK6MGvHkVNZTbefLFvOgLkufVwWFC4Q",
  authDomain: "sports-toys.firebaseapp.com",
  projectId: "sports-toys",
  storageBucket: "sports-toys.appspot.com",
  messagingSenderId: "987126082402",
  appId: "1:987126082402:web:46fea337af6426f3be5a3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
