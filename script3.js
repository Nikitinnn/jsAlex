
var rainbowContainer = document.getElementById("rainbow-container");
var stripes = rainbowContainer.getElementsByClassName("stripe");

document.addEventListener("mousemove", function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var windowX = window.innerWidth;
  var windowY = window.innerHeight;
  for (var i = 0; i < stripes.length; i++) {
    var offset = i * 0.5;
    var stripe = stripes[i];
    var x = (mouseX - (windowX / 2)) * (i / stripes.length);
    var y = (mouseY - (windowY / 2)) * (i / stripes.length);
    stripe.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + offset + "deg)";
  }
});