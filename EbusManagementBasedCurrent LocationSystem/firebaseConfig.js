// firebaseConfig.js
// Replace with your Firebase configuration details

//============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
        apiKey: "AIzaSyAzVUan7FNy-_i6iXI0uVFn73lFh5CVwps",
        authDomain: "teacher-student-appointm-ed270.firebaseapp.com",
        projectId: "teacher-student-appointm-ed270",
        storageBucket: "teacher-student-appointm-ed270.appspot.com",
        messagingSenderId: "71685514215",
        appId: "1:71685514215:web:265759764bde84a3e4d342",
        measurementId: "G-PWDNR8YFEX"
      };


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child };
   