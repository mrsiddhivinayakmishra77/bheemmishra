import { auth } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

if (signupBtn) {
  signupBtn.addEventListener("click", async () => {

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username) {
      alert("Please enter a username.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: username
      });

      alert("Account Created Successfully!");
      window.location.href = "login.html";

    } catch (error) {
      alert(error.message);
    }

  });
}

// Login
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login Successful!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}import { signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await signOut(auth);
    window.location.href = "login.html";
  });
}
