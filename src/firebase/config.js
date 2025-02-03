import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvv8glL8atyPAI06I91rwdywgYHQGjzms",
  authDomain: "nextapp-77286.firebaseapp.com",
  projectId: "nextapp-77286",
  storageBucket: "nextapp-77286.firebasestorage.app",
  messagingSenderId: "107100549203",
  appId: "1:107100549203:web:013086f920d2fa25a016a6",
  measurementId: "G-V4YKX1R0VV"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

