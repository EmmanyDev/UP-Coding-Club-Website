function signUpUser() {
    var password = document.getElementById('password').value
    var repeat = document.getElementById('repeat').value
    
    
    console.log(email)
    console.log(password)
    
    if (password != repeat){
        alert('passwords dont match')
    }
    else {
        runSignUp()
        window.location.href='login.html'
    }
    
}

function runSignUp(){
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        firebase.auth().createUserWithEmailAndPassword(email, password, ).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    
}

function cancelSignUp(){
    window.location.href='index.html'
}