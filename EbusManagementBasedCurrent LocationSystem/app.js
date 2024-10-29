import { db, ref, set, get, child } from './firebaseConfig.js';

// Register a New User
async function registerUser() {
   const firstName = document.getElementById('first-name').value;
   const lastName = document.getElementById('last-name').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields.");
      return;
   }

   try {
      await set(ref(db, 'users/' + email.replace('.', '_')), {
         firstName,
         lastName,
         email,
         password,
      });
      alert("Registration successful!");
   } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Try again.");
   }
}

// User Login
async function loginUser() {
   const email = document.getElementById('login-email').value;
   const password = document.getElementById('login-password').value;

   if (!email || !password) {
      alert("Please enter both email and password.");
      return;
   }

   try {
      const userSnapshot = await get(child(ref(db), 'users/' + email.replace('.', '_')));
      const user = userSnapshot.val();

      if (user && user.password === password) {
         alert("Login successful!");
      } else {
         alert("Invalid credentials.");
      }
   } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Try again.");
   }
}

// Expose functions to global scope for button click events
window.registerUser = registerUser;
window.loginUser = loginUser;
