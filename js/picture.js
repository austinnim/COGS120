$(document).ready(function(){
  var currUser = localStorage.getItem("currentUser");
  var currUserObj = JSON.parse(localStorage.getItem(currUser));
  var picArray = currUserObj.userPics;
  for (var i=1; i<picArray.length; i++){
    var node = document.createElement("IMG");
    node.setAttribute("src", picArray[i]);
    console.log(picArray[i]);
    var parentNode = document.getElementById("picgallery");
    parentNode.appendChild(node);
  }
  // will call upon the function new picture that runs sub functions to capture an image
  $('input#fileContainer').on('change', function () {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      document.body.appendChild(canvas);

      var context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);

      var data = canvas.toDataURL();
      localStorage.setItem('uploadedImage', data); // save image data
    };
    var imgSrc = 'file://' + $("#uploadImage").val();

    /*
    var reader = new FileReader();
      reader.onload = function () {
          var thisImage = reader.result;
          localStorage.setItem("imgdata", thisImage);
      };
    reader.readAsDataURL(this.files[0]);
    */
    var node = document.createElement("IMG");
    node.setAttribute("src", localStorage.getItem("imgdata"));
    var parentNode = document.getElementById("picgallery");
    parentNode.appendChild(node);
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
    currUserObj.userPicDates = mm + '/' + dd + '/' + yyyy;
    localStorage.setItem(currUserObj.userEmail, JSON.stringify(currUserObj));
  });
});

function attachDate(){
}
