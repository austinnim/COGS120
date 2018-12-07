$(document).ready(function (){
  var currUser = localStorage.getItem("currentUser");
  var currUserObj = JSON.parse(localStorage.getItem(currUser));
  var userRec = currUserObj.userPersonalRec;
  var userRecWeight = currUserObj.userPersonalWeight;
  var dateRec = currUserObj.userDates;
  for(var i=0; i<userRec.length; i++){
    var exercise = currUserObj.userPersonalRec[i];
    var record = currUserObj.userPersonalWeight[i];
    var date = currUserObj.userDates[i];
    var node = document.createElement("Li");
    var text =  exercise + " = " + record + date;
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
  }
  $("#Add").click(function (){
    var exercise = $("#lift").val();
    userRec.push(exercise);
    var record = $("#weight").val();
    userRecWeight.push(record);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    var dateOfRec = mm + '/' + dd + '/' + yyyy;
    var node = document.createElement("Li");
    var text =  exercise + " = " + record + "  Date: " + dateOfRec;
    dateRec.push(dateOfRec);
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    localStorage.setItem("wert0321@aim.com", JSON.stringify(currUserObj));
  });
});
