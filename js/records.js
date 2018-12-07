$(document).ready(function (){
  var currUser = localStorage.getItem("currentUser");
  var currUserObj = JSON.parse(localStorage.getItem(currUser));
  var userRec = currUserObj.userPersonalRec;
  var userRecWeight = currUserObj.userPersonalWeight;
  for(var i=0; i<userRec.length; i++){
    var exercise = currUserObj.userPersonalRec[i];
    var record = currUserObj.userPersonalWeight[i];
    var node = document.createElement("Li");
    var text =  exercise + " = " + record;
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
  }
  $("#Add").click(function (){
    var exercise = $("#lift").val();
    userRec.push(exercise);
    var record = $("#weight").val();
    userRecWeight.push(record);
    var node = document.createElement("Li");
    var text =  exercise + " = " + record;
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
  });
  $("#edit").click(function (){
    console.log("clicked submit");
    var exercise = $("#lift").val();
    var record = $("#weight").val();
    console.log("record = " + record);
    var node = document.createElement("Li");
    var text =  exercise + " = " + record;
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
  });
});
