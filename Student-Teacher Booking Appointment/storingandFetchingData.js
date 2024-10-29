function bookAppointment(studentName, teacherId, time) {
  const appointmentData = {
    studentName: studentName,
    teacherId: teacherId,
    time: time,
    status: 'pending'
  };

  const appointmentsRef = firebase.database().ref('appointments');
  appointmentsRef.push(appointmentData)
    .then(() => {
      console.log("Appointment booked successfully!");
    })
    .catch((error) => {
      console.error("Error booking appointment: ", error.message);
    });
}
