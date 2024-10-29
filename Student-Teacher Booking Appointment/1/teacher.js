// teacher.js
import { db } from './firebase.js';
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Fetch all appointments for this teacher
async function fetchAppointments(teacherId) {
  const q = query(collection(db, 'appointments'), where('teacherId', '==', teacherId));
  const querySnapshot = await getDocs(q);
  
  const appointmentList = document.getElementById('appointment-list');
  appointmentList.innerHTML = '';
  
  querySnapshot.forEach((doc) => {
    const appointment = doc.data();
    appointmentList.innerHTML += `<p>Appointment Time: ${appointment.appointmentTime} - Status: ${appointment.status}</p>`;
  });
}

fetchAppointments('teacherId');
