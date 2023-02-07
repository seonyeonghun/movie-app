// 파이어베이스를 사용하려면 반드시 초기화를 해야합니다.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvCsqWohI5azzSv84D8e01hi5CYVEKKkE",
  authDomain: "react-project-d72d7.firebaseapp.com",
  projectId: "react-project-d72d7",
  storageBucket: "react-project-d72d7.appspot.com",
  messagingSenderId: "594237164916",
  appId: "1:594237164916:web:597ef51cc238dccd91f021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);