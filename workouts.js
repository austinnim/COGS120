$document.ready( function(){
  $("#chosenprogam").click(function(){
    var currUser = localStorage.getItem("currentUser");
    var currUserObj = localStorage.getItem(currUser);
    currUserObj= JSON.parse(currUserObj);
    currUserObj.userPrograms = ;
  });
});
