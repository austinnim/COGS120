$( document ).ready(function() {
    var checkLoggedIn = document.getElementById("myprofile");
    $("#myprofile").click(function(){
      if(localStorage.getItem("loggedIn") === "true") {
        window.location.href = "./myprofile.html";
      }
      window.location.href = "./login.html";
    });
});
