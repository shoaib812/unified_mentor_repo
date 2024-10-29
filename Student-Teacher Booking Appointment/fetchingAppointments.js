function getAppointments() {
  const appointmentsRef = firebase.database().ref('appointments');
  appointmentsRef.on('value', (snapshot) => {
    const appointments = snapshot.val();
    console.log(appointments);
    // Display appointments in UI
  });
}
