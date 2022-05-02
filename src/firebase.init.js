// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUPQBSTOp8AntHJoFiVCka8ovQKAfs3Bw",
    authDomain: "simple-it-management.firebaseapp.com",
    projectId: "simple-it-management",
    storageBucket: "simple-it-management.appspot.com",
    messagingSenderId: "310713137396",
    appId: "1:310713137396:web:0f2142a6ca8cd2938686a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;