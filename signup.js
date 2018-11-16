userProfile(email, password, name);

window.addEventListener ("load", function () {
  document.getElementById("signup").addEventListener("click", createProfile());
});

var newName = document.getElementById("name");
var newEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var confirmPass = document.getElementById("confirmPass")

function createProfile (){
  while (validPass() != 1) {
    alert("One of your inputs for password or confirm password are incorrect!");
  }
  var newUserObj = new userProfile(newEmail.value, userPassword.value, newName.value);
  newUserObj = JSON.stringify(newUserObj);
  localStorage.setItem(newEmail.value, JSON.stringify(newUserObj));
  window.location.href="./myprofile.html";
  localStorage.setItem("loggedIn", "true");
}

function validatePass() {
  if(userPassword.value == confirmPass.value) {
    // 1 = true
    return 1;
  }
  // 0 = false
  return 0;
}
