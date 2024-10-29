// Registration
function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User registered: ", userCredential.user);
      // Redirect or show a success message
    })
    .catch((error) => {
      console.error("Error registering user: ", error.message);
    });
}

// Login
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User logged in: ", userCredential.user);
      // Redirect to dashboard
    })
    .catch((error) => {
      console.error("Login failed: ", error.message);
    });
}
