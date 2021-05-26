var controllers = document.querySelector(".controller");
var switchScreen = document.querySelector("#screen");
var switchDevice = document.querySelector("#switch");
var currentPlaymode = "Handheld Mode";

function playMode() {
  if (currentPlaymode === "Handheld Mode") {
    switchScreen.style.order = "2";
    controllers.style.marginRight = "10px";
    switchScreen.style.marginLeft = "10px";
    currentPlaymode = "Table Top Mode";
  } else {
    switchScreen.style.order = "";
    currentPlaymode = "Handheld Mode";
    controllers.style.marginRight = "0px";
    switchScreen.style.marginLeft = "0px";
  }
  document.querySelector("#currentPlaymode").textContent = currentPlaymode;
}

gamePickerOff(); //Power is off, so users can't select a game//

function gamePickerOn() {
  var x = document.querySelector("form");
  x.style.display = "block";
}
function gamePickerOff() {
  var x = document.querySelector("form");
  x.style.display = "none";
}
function pressPower() {
  if (switchScreen.classList.contains("powerOff")) {
    switchScreen.classList.add("onHome");
    switchScreen.classList.toggle("powerOff");
    gamePickerOn();
  } else {
    switchScreen.classList.remove("onHome");
    switchScreen.classList.toggle("powerOff");
    switchScreen.style.backgroundImage = "none";
    gamePickerOff();
  }
}

function zeldaOn() {
  switchScreen.style.backgroundImage =
    "url('https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg')";
  switchScreen.style.backgroundSize = "cover";
  switchScreen.classList.remove("onHome");
  switchScreen.classList.add("onGame");
}
function marioOdysseyOn() {
  switchScreen.style.backgroundImage =
    "url('https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/super-mario-odyssey-switch/super-mario-odyssey-switch-hero.jpg')";
  switchScreen.style.backgroundSize = "cover";
  switchScreen.classList.remove("onHome");
  switchScreen.classList.add("onGame");
}
//uncheck selected game when you click Home button and go to Home//
function superSmashBrosOn() {
  switchScreen.style.backgroundImage =
    "url('https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/super-smash-bros-ultimate-switch/super-smash-bros-ultimate-switch-hero.jpg')";
  switchScreen.style.backgroundSize = "cover";
  switchScreen.classList.remove("onHome");
  switchScreen.classList.add("onGame");
}

function uncheckZelda() {
  document.getElementById("zelda").checked = false;
}
function uncheckOdyssey() {
  document.getElementById("marioOdyssey").checked = false;
}
function uncheckSmash() {
  document.getElementById("superSmashBros").checked = false;
}
function goHome() {
  switchScreen.classList.add("onHome");
  switchScreen.style.backgroundImage = "none";
  uncheckZelda();
  uncheckOdyssey();
  uncheckSmash();
}

function rightArrow() {
  let activeBox = document.querySelector(".active");
  if (activeBox.id === "bowBox") {
    activeBox.classList.toggle("active");
    document.getElementById("oddBox").classList.add("active");
  } else if (activeBox.id === "oddBox") {
    activeBox.classList.toggle("active");
    document.getElementById("smashBox").classList.add("active");
  }
}

function leftArrow() {
  let activeBox = document.querySelector(".active");
  if (activeBox.id === "smashBox") {
    activeBox.classList.toggle("active");
    document.getElementById("oddBox").classList.add("active");
  } else if (activeBox.id === "oddBox") {
    activeBox.classList.toggle("active");
    document.getElementById("bowBox").classList.add("active");
  }
}

function userProfileTitle() {
  debugger;
  document.getElementById("profName").visibility = "visible";
  var profileIcon = document.querySelector(".userIcon");
  profileIcon.display.outline = "blue";
}
