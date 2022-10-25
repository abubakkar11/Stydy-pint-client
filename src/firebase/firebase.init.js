// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtV4itUuZHnU7MPDpWE14-IrPaGqoHRi0",
  authDomain: "study-point-auth.firebaseapp.com",
  projectId: "study-point-auth",
  storageBucket: "study-point-auth.appspot.com",
  messagingSenderId: "950593858971",
  appId: "1:950593858971:web:c100a265b79a575371453e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;