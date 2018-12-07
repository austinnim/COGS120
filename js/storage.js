/* Validate user input to see if they have an account */
function loadProfile (){
  var currUser = localStorage.getItem("currentUser");
  var currUserObj = JSON.parse(localStorage.getItem(currUser));
  var picArray = currUserObj.userPics;

  var profile = document.getElementById("profilePic");
  profile.src = picArray[0];
  // grab user's name
  var accInfo = document.getElementById("userInfo");
  var node = document.createElement("Li");
  var text = currUserObj.userName ;
  var textnode=document.createTextNode(text);
  node.appendChild(textnode);
  accInfo.appendChild(node);
  //user's weight
  var accInfo = document.getElementById("userInfo");
  var node = document.createElement("Li");
  var text = currUserObj.userWeight ;
  var textnode=document.createTextNode(text);
  node.appendChild(textnode);
  accInfo.appendChild(node);
  // grab user's workout program
  node = document.createElement("Li");
  text = "Program: " + currUserObj.progName;
  textnode=document.createTextNode(text);
  node.appendChild(textnode);
  accInfo.appendChild(node);
  // create profile edit button
  node = document.createElement("button");
  text = "View and edit profile";
  textnode=document.createTextNode(text);
  node.appendChild(textnode);
  accInfo.appendChild(node);
}

/*
function newPicture() {
// Run this function once the according for taking new picture is displayed
var width = 320;    // We will scale the photo width to this
var height = 0;     // This will be computed based on the input stream

var streaming = false;

var video = null;
var canvas = null;
var photo = null;
var captureBtn = null;

function startup() {
video = document.getElementById('video');
canvas = document.getElementById('canvas');
photo = document.getElementById('photo');
captureBtn = document.getElementById('captureButton');
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
.then(function(stream) {
video.srcObject = stream;
video.play();
})
.catch(function(err) {
console.log("An error occurred! " + err);
});

video.addEventListener('canplay', function(ev){
if (!streaming) {
height = video.videoHeight / (video.videoWidth/width);

video.setAttribute('width', width);
video.setAttribute('height', height);
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);
streaming = true;
}
}, false);

captureBtn.addEventListener('click', function(ev){
takepicture();
ev.preventDefault();
}, false);
clearphoto();
}

function clearphoto() {
var context = canvas.getContext('2d');
context.fillStyle = "#AAA";
context.fillRect(0, 0, canvas.width, canvas.height);

var data = canvas.toDataURL('image/png');
photo.setAttribute('src', data);
}
function takepicture() {
var context = canvas.getContext('2d');
if (width && height) {
canvas.width = width;
canvas.height = height;
context.drawImage(video, 0, 0, width, height);

var data = canvas.toDataURL('image/png');
photo.setAttribute('src', data);
} else {
clearphoto();
}
}
}
*/

/* Once the doc has loaded create t*/
$(document).ready(function(){
  $("#logout").hide();
  $("#program").show();
  var currUser = localStorage.getItem("currentUser");
  var currUserObj = localStorage.getItem(currUser);
  // check to see if user is logged in
  if (localStorage.getItem('loggedIn') && currUserObj){
    var currUserObj = JSON.parse(currUserObj);
      loadProfile();
    // show the logout button
    $("#logout").show();
    // will log the user out and redirect them to the home page
    $("#logout").click(function (){
      localStorage.setItem(currUserObj.userEmail, JSON.stringify(currUserObj));
      localStorage.setItem("loggedIn", "false");
      localStorage.setItem("currentUser", "");
      $("#logout").hide();
      window.location.href = "./index.html";
    });

    //var fileInput = document.getElementById('fileInput');
    //fileInput.addEventListener('change', imageLoader(), false);
    // show the users program
    // will redirect the user back to their program page
    $("#program").click(function (){
      if(currUserObj.userPrograms === ""){
        alert("Choose a program from the home screen!");
        window.location.href= "./index.html";
      } else {
          window.location.href = currUserObj.userPrograms;
      }
    });
  } else {
    window.location.href="./login.html";
  }
});
