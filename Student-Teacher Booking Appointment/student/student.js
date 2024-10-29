 const teacherRef = firebase.database().ref('teachers');

 function searchTeacher() {
 	const query = document.getElementById('teacher-search').value;

 	teacherRef.orderByChild('subject').equalTo(query).on('value', (snapshot) => {
 		const teachers = snapshot.val();
 		const searchResults = document.getElementById('search-results');
 		searchResults.innerHTML = '';
 		for(let id in teachers) {
 			searchResults.innerHTML += `<p>${teachers[id].name} - ${teachers[id].department}</p>`;
 		}
 	});
 }