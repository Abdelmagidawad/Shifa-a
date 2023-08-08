import { NetworkHelper } from "../../Network/remoteHelper.js";

let inputFName = document.querySelector("[name='first-name']");
let inputLName = document.querySelector("[name='last-name']");
let inputAge = document.querySelector("[name='date-of-birth']");
let inputGender = document.querySelectorAll("input[name = 'gender']");
let inputEmail = document.querySelector("[name='email']");
let inputPhone = document.querySelector("[name='phone']");
let inputPassword = document.querySelector("[name='password']");
let inputPasswordCon = document.querySelector("[name='confirm password']");
let buttonSubmit = document.querySelector(".input");
let selectedGender = "";

const networkHelper = new NetworkHelper();

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  inputGender.forEach(function (input) {
    if (input.checked) {
      selectedGender = input.value;
    }
  });

  let isValid = validateForm();
  if (isValid) {
    const patient = new Patient(
      inputFName.value,
      inputLName.value,
      inputAge.value,
      selectedGender,
      inputPhone.value,
      inputEmail.value
    );

    networkHelper
      .createPatientWithEmailAndPasswordAndWriteData(
        patient,
        inputPassword.value
      )
      .then((message) => {
        // Success handling
        window.location.assign("../../Login/login.html");
        // "Success"
      })
      .catch((errorMessage) => {
        // Error handling
        console.error(errorMessage);
      });
  }
});

function validateForm() {
  if (
    inputFName.value === "" ||
    inputLName.value === "" ||
    inputAge.value === "" ||
    selectedGender === "" ||
    inputEmail.value === "" ||
    inputPhone.value === "" ||
    inputPassword.value === "" ||
    inputPasswordCon.value === ""
  ) {
    alert("Please fill all fields");
    return false; // Prevent form submission
  }
  if (inputPassword.value !== inputPasswordCon.value) {
    alert("Passwords don't match");
    return false;
  }
  if (inputPassword.value.length < 8 || inputPassword.value.length > 16) {
    alert("Password should be between 8 and 16 characters");
    return false;
  }

  return true; // Allow form submission
}

// Icon hidden&show password
let iconPass = document.querySelector(".pass i");
let iconConPass = document.querySelector(".con-pass i");

iconPass.addEventListener("click", function () {
  if (this.classList.contains("fa-eye-slash")) {
    inputPassword.setAttribute("type", "text");
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
  } else {
    inputPassword.setAttribute("type", "password");
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
  }
});

iconConPass.addEventListener("click", function () {
  if (this.classList.contains("fa-eye-slash")) {
    inputPasswordCon.setAttribute("type", "text");
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
  } else {
    inputPasswordCon.setAttribute("type", "password");
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
  }
});

// Links Header
let iconMenu = document.querySelector(".menu-links .icon");
let pLinks = document.querySelector(".menu-links .links");
let overlayLinks = document.querySelector(".nav-bar .overlinks");

iconMenu.addEventListener("click", () => {
  iconMenu.firstElementChild.classList.toggle("anemy2");
  iconMenu.firstElementChild.nextElementSibling.classList.toggle("anemy1");
  iconMenu.lastElementChild.classList.toggle("anemy3");
  pLinks.classList.toggle("visible");
  overlayLinks.classList.toggle("overvisible");
});

// Scroll Top Code
let iconScrollTop = document.querySelector(".UP");

window.addEventListener("scroll", function () {
  this.scrollY >= 300
    ? iconScrollTop.classList.add("show")
    : iconScrollTop.classList.remove("show");
});

iconScrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
