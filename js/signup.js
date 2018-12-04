$(document).ready(function(){
  document.getElementById("signup").addEventListener("click", createProfile());
});

var newName = document.getElementById("name");
var newEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var confirmPass = document.getElementById("confirmPass");

function createProfile (){
  var newUserObj = new userProfile(newEmail.value, userPassword.value, newName.value);
  // turn user's object into a string to store
  newUserObj = JSON.stringify(newUserObj);
  localStorage.setItem(newEmail.value, JSON.stringify(newUserObj));
  localStorage.setItem("currentUser", newEmail.value);
  localStorage.setItem("loggedIn", "true");
  window.location.href="./myprofile.html";
}

function validatePass() {
  if(userPassword.value == confirmPass.value) {
    // 1 = true
    return 1;
  }
  // 0 = false
  return 0;
}
