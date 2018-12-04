var navBar = '<nav>\
                  <figure>\
                    <a href="./index.html" id="home"><img src="navbar_icons/home.png" alt="home icon" /><figcaption>Home</figcaption></a>\
                  </figure>\
                  <figure> \
                    <a href="./glossary.html" id="glossary"><img src="navbar_icons/glossary.png" alt="glossary icon" /><figcaption>Glossay</figcaption> </a>\
                  </figure>\
                  <figure>\
                    <a href="./myprofile.html" id="myprofile"><img src="navbar_icons/myprofile.png" alt="myprofile icon" /><figcaption>myProfile</figcaption> \</a>\
                    <figcaption>Home</figcaption> \
                  </figure> \
              </nav>';

$( document ).ready(function() {
    document.getElementById("navbar").innerHTML = navBar;
});
