import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
      import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
      
      const firebaseConfig = {
        apiKey: "AIzaSyAzVUan7FNy-_i6iXI0uVFn73lFh5CVwps",
        authDomain: "teacher-student-appointm-ed270.firebaseapp.com",
        projectId: "teacher-student-appointm-ed270",
        storageBucket: "teacher-student-appointm-ed270.appspot.com",
        messagingSenderId: "71685514215",
        appId: "1:71685514215:web:265759764bde84a3e4d342",
        measurementId: "G-PWDNR8YFEX"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);

      // Add event listener to the form submission
      document.getElementById("add-teacher-form").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form from refreshing the page
        
        // Get form values
        const name = document.getElementById("teacher-name").value;
        const department = document.getElementById("teacher-department").value;
        const subject = document.getElementById("teacher-subject").value;

        // Set data in Firebase
        set(ref(db, 'teachers/' + name), {
          teacherName: name,
          teacherDepartment: department,
          teacherSubject: subject,
        }).then(() => {
          alert("Teacher added successfully!");
        }).catch((error) => {
          alert("Error adding teacher: " + error.message);
        });
      });