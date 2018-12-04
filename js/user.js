/* Constructor for new person */
function userProfile(email, password, name) {
  this.userEmail = email;
  this.userPass = password;
  this.userName = name;
  this.userPrograms = "";
  this.progName = "";
  this.userPics = ["./fillerPics/profile.png"];
}

/* Example User */
var sampleUser = new userProfile("wert0321@aim.com", "wert0321", "Austin Nim")
sampleUser.userPrograms = "./power/novicedetails.html";
sampleUser.progName = "Power Lifting - Novice";
localStorage.setItem("wert0321@aim.com", JSON.stringify(sampleUser));
