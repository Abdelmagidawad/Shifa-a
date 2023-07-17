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

// Links Header
let iconMenu = document.querySelector(".menu-links .icon");
let pLinks = document.querySelector(".menu-links .links");

iconMenu.addEventListener("click", () => {
  iconMenu.firstElementChild.classList.toggle("anemy2");
  iconMenu.firstElementChild.nextElementSibling.classList.toggle("anemy1");
  iconMenu.lastElementChild.classList.toggle("anemy3");
  pLinks.classList.toggle("visible");
});
