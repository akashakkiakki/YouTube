// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_3icT4Dlx7o42BCJzSwPMk4QY-h2Zgt0",
  authDomain: "my-918a6.firebaseapp.com",
  projectId: "my-918a6",
  storageBucket: "my-918a6.appspot.com",
  messagingSenderId: "461577418359",
  appId: "1:461577418359:web:51ea0cde98fda308f37872",
  measurementId: "G-KQ977D702T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);