/* Constructor for new person */
function userProfile(email, password, name) {
  this.userEmail = email;
  this.userPass = password;
  this.userName = name;
  this.userPrograms = "";
  this.progName = "";
  this.userWeight = "";
  this.userPics = ["./fillerPics/profile.png"];
  this.userDates = [];
  this.userPersonalRec = [];
  this.userPersonalWeight = [];
}

/* Example User */
var sampleUser = new userProfile("wert0321@aim.com", "wert0321", "Austin Nim")
sampleUser.userPrograms = "./power/novicedetails.html";
sampleUser.progName = "Power Lifting - Novice";
sampleUser.userPics.push("./fillerPics/SPONGEBOBLIFTINGPANTS.gif");
sampleUser.userPics.push("./fillerPics/SPONGEBOBLIFTINGPANTS.gif");
sampleUser.userPics.push("./fillerPics/SPONGEBOBLIFTINGPANTS.gif");
sampleUser.userPics.push("./fillerPics/SPONGEBOBLIFTINGPANTS.gif");
sampleUser.userWeight = "140lbs";
sampleUser.userPersonalRec.push("Deadlift");
sampleUser.userPersonalWeight.push("145");
sampleUser.userDates.push("  starting point");
localStorage.setItem("wert0321@aim.com", JSON.stringify(sampleUser));


function validate() {
  var currUser = document.getElementById("accountInfo").user.value;
  var password = document.getElementById("accountInfo").password.value;

  var currUserObj= localStorage.getItem(currUser);
  currUserObj = JSON.parse(currUserObj);
  // check if user has a profile
  if(currUserObj) {
    var userPass = currUserObj.userPass;
    console.log("Stored user pass = " + userPass);
    console.log("Entered user pass = " + password);
    // check password => if pass != pass then say password is incorrect else reload page with profile
    if(userPass === password){
      console.log("approved password")
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", currUser);
      console.log("returning to profile");
      window.location.href = "./myprofile.html";
    } else {
      alert("incorrect password");
    }
  } else {
    alert("User account does not exist. Please retry typing your email, and if not please register a new account.");
  }
}

$(document).ready(function (){
  //run validate to check info once submit is hit
  $("#submitInfo").click( function(){
    console.log("validating password");
    validate();
  });
  // close the text box
  $("#close").click( function (){
    window.location.href = "./index.html";
  });
});
