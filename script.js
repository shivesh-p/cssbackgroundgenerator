var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var bg = document.getElementById("bg-gr");
var rand = document.getElementById("rand");
function setColorText() {
  css.textContent =
    "rgba(0, 0, 0, 0) linear-gradient(to right, rgb(47, 208, 188), rgb(91, 45, 210)) repeat scroll 0% 0%" +
    ";";
    color1.value = rgbToHex(47,208,188);
    color2.value = rgbToHex(91,45,210);
}
function setBGR(r1, g1, b1, r2, g2, b2) {
  bg.style.background = `linear-gradient(to right, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
  rand.style.background = `linear-gradient(to right, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
  color1.value = rgbToHex(r1,g1,b1);
  color2.value = rgbToHex(r2,g2,b2);
  css.textContent = bg.style.background + ";";
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
function generateRandom() {
  var r1, g1, b1, r2, g2, b2;
  r1 = Math.floor(Math.random() * 256);
  g1 = Math.floor(Math.random() * 256);
  b1 = Math.floor(Math.random() * 256);
  r2 = Math.floor(Math.random() * 256);
  g2 = Math.floor(Math.random() * 256);
  b2 = Math.floor(Math.random() * 256);
  setBGR(r1, g1, b1, r2, g2, b2);
}

function setBG() {
  bg.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  rand.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = bg.style.background + ";";
}
color1.addEventListener("input", setBG);
color2.addEventListener("input", setBG);
rand.addEventListener("click", generateRandom);
setColorText();
