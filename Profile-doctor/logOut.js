import { NetworkHelper } from "../Network/remoteHelper.js";

let logBtnHeader = document.querySelector(".tol-links li button");
let parentPopup = document.querySelector(".popup-content");
let cancelBtn = document.querySelector(".popup #cancel");
let logoutBtn = document.querySelector(".popup #logout");
let overlay = document.querySelector(".popup .overlay");
// to close Profile toltab
let imagHeader = document.querySelector(".Profile-toltab img");

const networkHelper = new NetworkHelper();

logBtnHeader.addEventListener("click", function () {
  document.getElementById("POP").classList.toggle("active");
  imagHeader.click();
});

cancelBtn.addEventListener("click", function () {
  parentPopup.parentElement.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  cancelBtn.click();
});

logoutBtn.addEventListener("click", function () {
  networkHelper.signOutUser();
});
