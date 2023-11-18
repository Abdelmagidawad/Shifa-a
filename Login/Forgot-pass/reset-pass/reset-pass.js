let inputPassword = document.querySelector("[name='new-password']");
let inputConPassword = document.querySelector("[name='confirm-new-password']");
let buttonSubmit = document.querySelector(".input");
//
let secPassword = document.querySelector(".Form .pass");
let secPasswordMassg = document.querySelector(".Form .pass .error>p");
let secConPassword = document.querySelector(".Form .con-pass");
let secConPasswordMassg = document.querySelector(".Form .con-pass .error>p");

const passPattern = /^(?=.*\d)?(?=.*[a-z])?(?=.*[A-Z])?.{8,16}$/;

inputPassword.addEventListener("keyup", () => {
  if (!passPattern.test(inputPassword.value)) {
    secPasswordMassg.innerHTML = "Password must be between 8 and 16 characters";
    secPassword.classList.add("invalid");
  } else {
    secPassword.classList.remove("invalid");
  }
  if (inputPassword.value === "") {
    secPasswordMassg.innerHTML = "Password is required";
  }
});

inputConPassword.addEventListener("keyup", () => {
  if (inputPassword.value !== inputConPassword.value) {
    secConPasswordMassg.innerHTML = "Password don't match";
    secConPassword.classList.add("invalid");
  } else {
    secConPassword.classList.remove("invalid");
  }
  if (inputConPassword.value === "") {
    secConPasswordMassg.innerHTML = "Confirm password is required";
  }
});

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  //Password
  CheckInputEmpty(
    inputPassword,
    secPasswordMassg,
    secPassword,
    "Password is required",
    "Password must be between 8 and 16 characters"
  );
  //Confirm Password
  CheckInputEmpty(
    inputConPassword,
    secConPasswordMassg,
    secConPassword,
    "Confirm password is required",
    "Password don't match"
  );
  //
  if (
    Validation(passPattern, inputPassword, secPassword) &&
    inputPassword.value === inputConPassword.value
  ) {
    window.location.assign("../../login.html");
  }
  //
});

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

// Links Header when Mobile
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

// Icon hidden&show password
let iconPass = document.querySelector(".pass i");
let iconConPass = document.querySelector(".con-pass i");

iconPass.addEventListener("click", () => {
  showPassword(inputPassword, iconPass);
});

iconConPass.addEventListener("click", () => {
  showPassword(inputConPassword, iconConPass);
});

function showPassword(input, icon) {
  if (icon.classList.contains("fa-eye-slash")) {
    input.setAttribute("type", "text");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.setAttribute("type", "password");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

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
