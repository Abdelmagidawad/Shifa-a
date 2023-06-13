import { NetworkHelper } from "../Network/remoteHelper.js";

let inputEmail = document.querySelector("[name='email']");
let inputPassword = document.querySelector("[name='password']");
let buttonSubmit = document.querySelector(".input");

const networkHelper = new NetworkHelper();

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  let isValid = validateForm();
  if (isValid) {
    networkHelper.loginUser(inputEmail.value, inputPassword.value);

    //Cookies
    // alert(getCookieValue("userId"));
  }
});

function validateForm() {
  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Please fill all fields");
    return false; // Prevent form submission
  }

  if (inputPassword.value.length < 8 || inputPassword.value.length > 16) {
    alert("Password should be between 8 and 16 characters");
    return false;
  }

  return true; // Allow form submission
}
