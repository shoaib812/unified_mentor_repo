 const teacherRef = firebase.database().ref('teachers');

 function addTeacher() {
 	const name = document.getElementById('teacher-name').value;
 	const department = document.getElementById('teacher-department').value;
 	const subject = document.getElementById('teacher-subject').value;

 	const newTeacher = {
 		name,
 		department,
 		subject,
 	};

 	teacherRef.push(newTeacher)
 		.then(() => console.log("Teacher added successfully"))
 		.catch(error => console.error("Error adding teacher : ", error));
 }

  teacherRef.on('value', (snapshot) => {
  	const teachers = snapshot.val();
  	const teacherList = document.getElementById('teacher-list');
  	teacherList.innerHTML = '';
  	for(let id in teachers) {
  		teacherList.innerHTML += `<p>${teachers[id].name} - ${teachers[id].department}</p>`;
  	}
  });