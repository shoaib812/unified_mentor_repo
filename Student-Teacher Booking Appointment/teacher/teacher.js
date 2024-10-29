 const appointmentsRef = firebase.databse().ref('appointments');

 appointmentsRef.on('value', (snapshot) => {
 	const appointments = snapshot.val();
 	const appointmentList = document.getElementById('appointment-list');
 	appointmentList.innerHTML = '';
 	for(let id in appointments) {
 		appointmentList.innerHTML += `<p>Student: ${appointments[id].studentName} - Time: ${appointments[id].time}</p>`;
 	}
 });

 function updateAppointmentStatus(id, status) {
 	appointmentsRef.child(id).update({ status })
 		.then(() => console.log("appointment status update"))
 		.catch(error => console.error("Error updating status: ", error));
 }