import { NetworkHelper } from "../Network/remoteHelper.js";

let inputEmail = document.querySelector("[name='email']");
let inputPassword = document.querySelector("[name='password']");
let buttonSubmit = document.querySelector(".input");
//
let secEmail = document.querySelector(".Form .email");
let secEmailMassg = document.querySelector(".Form .email .error>p");
let secPassword = document.querySelector(".Form .pass");
let secPasswordMassg = document.querySelector(".Form .pass .error>p");

const networkHelper = new NetworkHelper();

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  //Email
  CheckInputEmpty(
    inputEmail,
    secEmailMassg,
    secEmail,
    "Email is required",
    "Please enter a Valid email"
  );
  //Password
  CheckInputEmpty(
    inputPassword,
    secPasswordMassg,
    secPassword,
    "Password is required",
    "Password must be between 8 and 16 characters"
  );

  /////
  let isValid = validateForm();
  if (isValid) {
    networkHelper.loginUser(inputEmail.value, inputPassword.value);

    //Cookies
    // alert(getCookieValue("userId"));
  }
});

// ***************

const mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const passPattern = /^(?=.*\d)?(?=.*[a-z])?(?=.*[A-Z])?.{8,16}$/;

inputEmail.addEventListener("keyup", () => {
  testVWKeyUp(
    mailPattern,
    inputEmail,
    secEmail,
    secEmailMassg,
    "Please enter a Valid email",
    "Email is required"
  );
});

inputPassword.addEventListener("keyup", () => {
  testVWKeyUp(
    passPattern,
    inputPassword,
    secPassword,
    secPasswordMassg,
    "Password must be between 8 and 16 characters",
    "Password is required"
  );
});

function validateForm() {
  //
  if (
    !Validation(mailPattern, inputEmail, secEmail) ||
    !Validation(passPattern, inputPassword, secPassword)
  )
    return false;
  return true;
}

// /////
function Validation(pattern, inputField, secFiled) {
  if (!pattern.test(inputField.value)) {
    secFiled.classList.add("invalid");
    return false;
  } else {
    secFiled.classList.remove("invalid");
    return true;
  }
}

function CheckInputEmpty(
  inputField,
  secInputMassg,
  secInput,
  massageDefault,
  massageReplace
) {
  if (inputField.value === "") {
    secInputMassg.innerHTML = massageDefault;
    secInput.classList.add("invalid");
  } else {
    secInputMassg.innerHTML = massageReplace;
  }
}

function testVWKeyUp(
  pattern,
  inputField,
  secInput,
  secInputMassg,
  defaultmassage,
  replacemassage
) {
  if (!pattern.test(inputField.value)) {
    secInputMassg.innerHTML = defaultmassage;
    secInput.classList.add("invalid");
  } else {
    secInput.classList.remove("invalid");
  }
  if (inputField.value === "") {
    secInputMassg.innerHTML = replacemassage;
  }
}
// /////
// ***************

// Icon hidden&show password

let iconPass = document.querySelector(".pass>i");

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
