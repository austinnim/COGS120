
/* Initializes the accordion menu, by creating an eventlistener that responds when the header is clicked */
$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion");

  acc[0].addEventListener("click", function(){
      this.classList.toggle("active");
      var panelList = document.getElementsByClassName("panel");
      if (panelList[0].style.display === "block") {
          panelList[0].style.display = "none";
      } else {
          panelList[0].style.display = "block";
          showSlides(1,0);
      }
  });

  acc[1].addEventListener("click", function(){
      this.classList.toggle("active");
      var panelList = document.getElementsByClassName("panel");
      if (panelList[1].style.display === "block") {
          panelList[1].style.display = "none";
      } else {
          panelList[1].style.display = "block";
          showSlides(1,1);
      }
  });
  acc[2].addEventListener("click", function(){
      this.classList.toggle("active");
      var panelList = document.getElementsByClassName("panel");
      if (panelList[2].style.display === "block") {
          panelList[2].style.display = "none";
      } else {
          panelList[2].style.display = "block";
          showSlides(1,2);
      }
  });
  acc[3].addEventListener("click", function(){
      this.classList.toggle("active");
      var panelList = document.getElementsByClassName("panel");
      if (panelList[3].style.display === "block") {
          panelList[3].style.display = "none";
      } else {
          panelList[3].style.display = "block";
          showSlides(1,3);
      }
  });
  acc[4].addEventListener("click", function(){
      this.classList.toggle("active");
      var panelList = document.getElementsByClassName("panel");
      if (panelList[4].style.display === "block") {
          panelList[4].style.display = "none";
      } else {
          panelList[4].style.display = "block";
          showSlides(1,4);
      }
  });
});

// determines which child of class mySlides to show
var slideIndex = [1,1,1,1,1];
// determines which panel of slides to show
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  console.log("slideIndex = " + no);
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

function search() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
      ul.style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
