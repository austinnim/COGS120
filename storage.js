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

/* Load for home page */

function userProfile(email, password, name) {
  this.userEmail = email;
  this.userPass = password;
  this.userName = name;
  this.userPrograms = "";
  this.userPics = ["./SPONGEBOBLIFTINGPANTS.gif", "./SPONGEBOBLIFTINGPANTS.gif" ,"./SPONGEBOBLIFTINGPANTS.gif"]
}

/* Example User */
var sampleUser = new userProfile("wert0321@aim.com", "testuser", "Austin Nim");
sampleUser.userPrograms = "novice.html";
localStorage.setItem("wert0321@aim.com", JSON.stringify(sampleUser));

console.log("Properply stored = " + localStorage.getItem(sampleUser.userEmail));

/* Keep track of the user and the user object*/
var currentUser;
var currUserObj;

/* Validate user input to see if they have an account */
function validate() {
  console.log("ftn validate()");
  var loginBox = document.getElementById("loginPopup");
  var submit = document.getElementById("submitInfo");
  currentUser = document.getElementById("accountInfo").user;
  var password = document.getElementById("accountInfo").password;
  currUserObj= localStorage.getItem(currentUser.value);
  // check if user has a profile
  console.log(" in validate before password check currUserObj = " + currUserObj);
  if(currUserObj) {
    currUserObj = JSON.parse(currUserObj);
    currentUser = currUserObj.userName;
    // check password => if pass != pass then say password is incorrect else reload page with profile
    if(currUserObj.userPass != password.value){
      alert ("Incorrect Password");
    } else {
      localStorage.setItem("loggedIn", "true");
      console.log("inside validate currUserObj = " + currUserObj);
      loadProfile();
      console.log("   Submitted");
    }
  } else {
    alert("User account does not exist. Please retry typing your email, and if not please register a new account.");
  }
}

function loadProfile (){
  if(!currUserObj) {
    return;
  }
  console.log("ftn loadProfile()");
  console.log("inside loadProfile currUserObj = " + currUserObj);
  var name = currUserObj.userName;
  document.getElementById("program").addEventListener("click",
    function (){
      window.location.href= currUserObj.userPrograms;
  });
  var picArray= currUserObj.userPics;
  document.getElementById("userInfo")[0] = name;
  document.getElementById("userInfo")[1] = "140 lbs";

  var pictures = document.getElementById("picGallery");
  for (var i=0; i<picArray.length; i++){
    // extract every image stored in the array
    // create img tag
    pictures.innerHTML = "<img>";
    // access each img tag by parent[X].src = userPics[X]
    pictures[i].src = picArray[i];
  }
  //console.log("reopening with new html");
  //window.location.href= "./myprofile.html";
  document.getElementById("loginPopup").close();
}


function closeBox() {
  console.log("ftn closeBox()");
  var loginBox = document.getElementById("loginPopup");
  var closeBtn = document.getElementById("close").addEventListener("click", function () {
    loginBox.close();
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
  console.log("LoggedIn = " + localStorage.getItem("loggedIn"));
}

window.onload = function(){
  // checks if a user is logged in
  if (localStorage.getItem('loggedIn')){
    document.getElementById("logout"),addEventListener("click", logout(), true);
    // if user is logged in then display their profile
    loadProfile();
  } else {
    // if user is not logged in then prompt them to
    //alert("Login to access your profile");
    // create click events for the close and submit button
    document.getElementById("loginPopup").showModal();
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("submitInfo").addEventListener("click", validate(), true);
    document.getElementById("close").addEventListener("click", function () {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("loginPopup").close();
    }, true);
  }
  localStorage.clear();
}
