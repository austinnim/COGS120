/*
File: Storage.js
Description: This file will hold the localStorage related functions.
- myProfile
- Needs to evaluate if the user is logged in
- local storage check
- Needs to be able to edit information
- setItem w/ parse & stringify
- Needs to be able to store photos and take photos
- parse & stringify?
- MediaDevices.getUserMedia
- Needs to maintain account information
- store in array
*/
/* Constructor for new person */
function userProfile(email, password, name) {
  this.userEmail = email;
  this.userPass = password;
  this.userName = name;
  this.userPrograms = "";
  this.userPics = new Array(3);
}

/* Example User */
var sampleUser = new userProfile("wert0321@aim.com", "testuser", "Austin Nim");
sampleUser.userPrograms = "novice.html";
localStorage.setItem("wert0321@aim.com", JSON.stringify(sampleUser));
console.log("Properply stored = " + localStorage.getItem("wert0321@aim.com"));
var currentUser = "";
var currUserObj;

/* Load for home page */
window.addEventListener("load",
function() {
  // checks if a user is logged in
  if (localStorage.getItem('loggedIn')){
    document.getElementById("logout"),addEventListener("click", logout());
    // if user is logged in then display their profile
    loadProfile();
  } else {
    // if user is not logged in then prompt them to
    //alert("Login to access your profile");
    // create click events for the close and submit button
    document.getElementById("submitInfo").addEventListener("click", validate(), true);
    document.getElementById("close").addEventListener("click", closeBox(), true);
    document.getElementById("loginPopup").showModal();
  }
}, true);

/* Validate user input to see if they have an account */
function validate() {
  console.log("ftn validate()");
  var loginBox = document.getElementById("loginPopup");
  var submit = document.getElementById("submitInfo");
  currentUser = document.getElementById("accountInfo").user;
  var password = document.getElementById("accountInfo").password;
  var userObj = localStorage.getItem(currentUser);
  // check if user has a profile
  console.log("userObj = " + userObj);
  if(userObj) {
    currUserObj = JSON.parse(userObj);
    localStorage.setItem("loggedIn", "true");
    // check password => if pass != pass then say password is incorrect else reload page with profile
    if(currUserObj.userPass != password.value){
      alert ("Incorrect Password");
    } else {
      loginBox.close();
      loadProfile();
    }
  } else {
    alert("User account does not exist. Please retry typing your email, and if not please register a new account.");
  }
}

function loadProfile (){
  console.log("ftn loadProfile()");
  var name = currUserObj.userName;
  document.getElementById("program").addEventListener("click",
    function (){
      window.location.href= currUserObj.userPrograms;
  });
  console.log(" current user = " + currUserObj.userName);
  console.log(" current user = " + currUserObj.userPics.length);
  var pictures = document.getElementById("picGallery");
  for (var i=0; i<(currUserObj.userPics).length; i++){
    // extract every image stored in the array
    // create img tag
    // access each img tag by parent[X].src = userPics[X]
  }
}


function closeBox() {
  console.log("ftn closeBox()");

  var loginBox = document.getElementById("loginPopup");
  loginBox.close();
  var closeBtn = document.getElementById("close").addEventListener("click", function () {
    window.location.href = "./index.html";
  });
}

function dropDownPics() {
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }
}

function personalRecord() {

}


function logout() {
  console.log("ftn logout()");
  localStorage.removeItem("loggedIn");
}
