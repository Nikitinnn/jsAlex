
document.addEventListener("keydown", function(event) {
  var rainbowColors = {
    "82": "#ff4136", // R - red
    "65": "#ff851b", // A - orange
    "73": "#ffdc00", // I - yellow
    "78": "#2ecc40", // N - green
    "66": "#0074d9", // B - blue
    "79": "#3d2b1f", // O - indigo
    "87": "#b10dc9"  // W - violet
  };
  var key = event.keyCode;
  if (rainbowColors[key]) {
    document.body.style.backgroundColor = rainbowColors[key];
  }
});