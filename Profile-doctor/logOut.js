import { NetworkHelper } from "../Network/remoteHelper.js";

let logBtnHeader = document.querySelector(".tol-links li button");
let parentPopup = document.querySelector(".popup-content");
let cancelBtn = document.querySelector(".popup #cancel");
let logoutBtn = document.querySelector(".popup #logout");
let overlay = document.querySelector(".popup .overlay");

const networkHelper = new NetworkHelper();

logBtnHeader.addEventListener("click", function () {
  document.getElementById("POP").classList.toggle("active");
});

cancelBtn.addEventListener("click", function () {
  parentPopup.parentElement.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  parentPopup.parentElement.classList.toggle("active");
});

logoutBtn.addEventListener("click", function () {
  networkHelper.signOutUser();
});
