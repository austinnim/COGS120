
/* Constructor for new person */
function userProfile(email, password, name) {
  this.userEmail = email;
  this.userPass = password;
  this.userName = name;
  this.userPrograms = "./novice.html";
  this.userPics = ["./SPONGEBOBLIFTINGPANTS.gif", "./SPONGEBOBLIFTINGPANTS.gif" ,"./SPONGEBOBLIFTINGPANTS.gif"];
}

/* Example User */
var sampleUser  = {
  userEmail: 'some string value',
  userPass: 2,
  userName: false,
  userPograms: "./advanced.html",
  userPics: ["./SPONGEBOBLIFTINGPANTS.gif", "./SPONGEBOBLIFTINGPANTS.gif" ,"./SPONGEBOBLIFTINGPANTS.gif"],
};

sampleUser.userPrograms = "novice.html";
localStorage.setItem("wert0321@aim.com", JSON.stringify(sampleUser));

/* Keep track of the user and the user object*/
var currentUser;
var currUserObj;

/* Validate user input to see if they have an account */
function validate() {
  console.log("Entering validate");
  currentUser = document.getElementById("accountInfo").user.value;
  console.log("Current User = " + currentUser);
  var password = document.getElementById("accountInfo").password.value;
  console.log("Password = " + password);

  currUserObj= localStorage.getItem(currentUser);
  // check if user has a profile
  if(currUserObj) {
    currUserObj = JSON.parse(currUserObj);
    currentUser = currUserObj.userEmail;
    // check password => if pass != pass then say password is incorrect else reload page with profile
    if(true){
      localStorage.setItem("loggedIn", "true");
      loadProfile();
    } else {
      alert("incorrect password");
    }
  } else {
    alert("User account does not exist. Please retry typing your email, and if not please register a new account.");
  }
}

function loadProfile (){
  if(!currUserObj) {
    return;
  }
  var picArray= currUserObj.userPics;
  var accInfo = document.getElementById("userInfo");
  accInfo.innerHTML = "<li>" + currUserObj.userName + "</li>";


  var pictures = document.getElementById("picGallery");
  for (var i=0; i<picArray.length; i++){
    pictures.innerHTML = "<img src=''>";
    // access each img tag by parent[X].src = userPics[X]

    pictures[i].setAttribute('src', picArray[i]);
  }
}

function personalRecord() {

}


function imageLoader() {
   var reader = new FileReader();
   reader.onload = function(event) {
     img = new Image();
     img.onload = function(){
       ctx.drawImage(img,0,0);
     }
     img.src = reader.result;
     currUserObj.userPics.push(reader.result);
   }
   reader.readAsDataURL(fileInput.files[0]);
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
  // check to see if user is logged in
  if (localStorage.getItem('loggedIn')){
    // if the user is logged in then load profile
    loadProfile(); // this is supposed to grab all relevant data for the users profile
    // creates the accordion => makes things collapsable
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

    //var fileInput = document.getElementById('fileInput');
    //fileInput.addEventListener('change', imageLoader(), false);
    // show the logout button for users
    $("#logout").show();
    // show the users program
    $("#program").show();
    // will log the user out and redirect them to the home page
    $("#logout").click(function (){
      console.log("Logging out");
      localStorage.setItem(currUserObj.userEmail, JSON.stringify(currUserObj));
      localStorage.removeItem("loggedIn");
      $("#logout").hide();
      window.location.href = "./index.html";
    });
    // will redirect the user back to their program page
    $("#program").click(function (){
      window.location.href= currUserObj.userPrograms;
    });
    // will call upon the function new picture that runs sub functions to capture an image
    $("#newPic").click(function(){
      newPicture();
    });
    $('input#fileContainer').on('change', function () {
    console.log(this);

    var reader = new FileReader();
    reader.onload = function (e) {
        console.log(reader.result + '->' + typeof reader.result)
        var thisImage = reader.result;
        localStorage.setItem("imgData", thisImage);
    };
    reader.readAsDataURL(this.files[0]);
});


$('input#show').click(function () {
    var dataImage = localStorage.getItem('imgData');
    console.log(dataImage);
    var imgCtr = $('<img/>').prop('src', dataImage);
    $('div#imgContainer').append(imgCtr);
});
  $("#Add").click(function (){
    console.log("clicked submit");
    var exercise = $("#lift").value;
    var record = $("#weight").value;
    console.log("record = " + record);
    var node = document.createElement("Li");
    var text = "<li>" + exercise + " == " + record + "</li>";
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
  });
  } else {
    // if user is not logged in then prompt them to
    alert("Login to access your profile");
    // show dialog box
    $("#loginPopup").show();
    //run validate to check info once submit is hit
    $("#submitInfo").click( function(){
      validate();
    });
    // close the text box
    $("#close").click( function (){
      $("#loginPopup").hide();
      window.location.href = "./index.html";
    });
  }
});
