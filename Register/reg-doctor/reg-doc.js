import { NetworkHelper } from "../../Network/remoteHelper.js";

let inputFName = document.querySelector("[name='first-name']");
let inputLName = document.querySelector("[name='last-name']");
let inputGender = document.querySelectorAll("input[name = 'gender']");
let inputSpecialty = document.querySelector("[name='specialty']");
let inputPhone = document.querySelector("[name='phone']");
let inputEmail = document.querySelector("[name='email']");
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
    const doctor = new Doctor(
      inputFName.value,
      inputLName.value,
      selectedGender,
      inputSpecialty.value,
      inputPhone.value,
      inputEmail.value
    );

    networkHelper
      .createUserWithEmailAndPasswordAndWriteData(doctor, inputPassword.value)
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
    selectedGender === "" ||
    inputSpecialty.value === "" ||
    inputPhone.value === "" ||
    inputEmail.value === "" ||
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
