function getUserName() {
    let email = sessionStorage.getItem('email')
    console.log(email)
    document.getElementById('teacher').innerHTML += email 
}

function raiseHand() {
    var dt = new Date();
    var hours = dt.getHours()
    var minutes = dt.getMinutes()
    let email = sessionStorage.getItem('email')
    
     ampm = hours >= 12 ? 'pm' : 'am';
    
     hours = hours % 12;
     hours = hours ? hours : 12; // the hour '0' should be '12'
    
     minutes = minutes < 10 ? '0'+minutes : minutes;
     var strTime = hours + ':' + minutes + ' ' + ampm;

    console.log(strTime)
    
    firebase.database().ref('students').push({ email: email, time: strTime})
    console.log('hours')
}

function addRow(email,time, key){
    document.getElementById('table').innerHTML += 
    `<tr>
        <td><button id = ${key} class = 'delete-button'>${email}</button></td>
        <td>${time}</td>
    </tr>`
}

function deleteRow(){
	const buttons = document.querySelectorAll('.delete-button')
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			let key = button.id
			console.log(key)
			let ref = firebase.database().ref('students')
			ref.child(key).remove();
			
			document.getElementById(key).style.backgroundColor = 'red'
		})
	})
}


function makeStudentList(){
    getUserName()
    var database = firebase.database();
    var studentList = database.ref('students');
    studentList.on('value', function(snapshot) {
        document.getElementById('table').innerHTML = ''
        let studentsInDatabase = snapshot.val()
        for (key in studentsInDatabase){
            var time = studentsInDatabase[key].time
            var studentEmail =  studentsInDatabase[key].email
            addRow(studentEmail,time, key)
            deleteRow()
        }
    });
}


