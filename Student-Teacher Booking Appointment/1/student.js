// student.js
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
// Search teacher
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
  const searchQuery = document.getElementById('search-teacher').value;
  const q = query(collection(db, 'teachers'), where('name', '==', searchQuery));

  const querySnapshot = await getDocs(q);
  const searchResultDiv = document.getElementById('teacher-search-result');
  searchResultDiv.innerHTML = '';

  querySnapshot.forEach((doc) => {
    const teacher = doc.data();
    searchResultDiv.innerHTML += `<p>${teacher.name} - ${teacher.department} - ${teacher.subject}</p>`;
  });
});

// Book an appointment
const bookAppointment = async (teacherId, appointmentTime) => {
  try {
    await addDoc(collection(db, 'appointments'), {
      teacherId,
      appointmentTime,
      status: 'pending'
    });
    alert('Appointment booked successfully');
  } catch (error) {
    console.error('Error booking appointment: ', error);
  }
};