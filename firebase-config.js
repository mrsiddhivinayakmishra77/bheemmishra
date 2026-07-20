import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjuKt7KWlvN1feMF0LYzb8j3lYhUzC5bU",
  authDomain: "bheem-ai-for-upsc.firebaseapp.com",
  projectId: "bheem-ai-for-upsc",
  storageBucket: "bheem-ai-for-upsc.firebasestorage.app",
  messagingSenderId: "1021922130060",
  appId: "1:1021922130060:web:a3933105cdae8e8d16a3a9",
  measurementId: "G-09MZPBZY1J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
