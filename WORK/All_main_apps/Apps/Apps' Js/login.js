function logInUser(){
  
  var email = document.getElementById('user').value
  var password = document.getElementById('pass').value
  
  
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((user)=>{
     console.log(user)
     let email = user.email
     sessionStorage.setItem('email', email)
 })
 .then(()=>{
    window.location.href = 'pick.html'
 })
 .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
  // ...
});
}

function logInWithGmail(){
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  let email = user.displayName
  sessionStorage.setItem('email', email)
  console.log(user)
  // ...
}).then(()=>{
    window.location.href = 'pick.html'
 }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  
//  firebase.auth().signInWithEmailAndPassword(email, password)
//  .then((user)=>{
//      console.log(user)
//      let email = user.email
//      sessionStorage.setItem('email', email)
//  })
//  .then(()=>{
//     window.location.href = 'pick.html'
//  })
//  .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorMessage)
  // ...
// });
}


  














