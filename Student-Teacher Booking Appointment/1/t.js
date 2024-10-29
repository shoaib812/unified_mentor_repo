import { db } from './firebase.js';
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Function to fetch all appointments for this teacher
async function fetchAppointments(teacherId) {
  try {
    const q = query(collection(db, 'appointments'), where('teacherId', '==', teacherId));
    const querySnapshot = await getDocs(q);
    
    const appointmentList = document.getElementById('appointment-list');
    appointmentList.innerHTML = '';
    
    querySnapshot.forEach((doc) => {
      const appointment = doc.data();
      appointmentList.innerHTML += `<p>Appointment Time: ${appointment.appointmentTime} - Status: ${appointment.status}</p>`;
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    appointmentList.innerHTML = "<p>Error loading appointments.</p>";
  }
}

// Fetch appointments on page load (replace 'teacherId' with an actual teacher ID)
fetchAppointments('teacherId');

// Function to handle appointment scheduling
document.getElementById('schedule-appointment-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const appointmentTime = document.getElementById('appointment-time').value;
  if (!appointmentTime) return alert("Please select an appointment time.");

  try {
    await addDoc(collection(db, 'appointments'), {
      teacherId: 'teacherId',  // replace with the actual teacher's ID
      appointmentTime: appointmentTime,
      status: 'Scheduled'
    });
    alert("Appointment scheduled successfully.");
    fetchAppointments('teacherId');  // Refresh the appointment list
  } catch (error) {
    console.error("Error scheduling appointment:", error);
    alert("Failed to schedule appointment.");
  }
});
