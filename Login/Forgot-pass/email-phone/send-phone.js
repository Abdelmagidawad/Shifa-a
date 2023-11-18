// from validation
let inputPhone = document.querySelector("[name='phone']");
let buttonSubmit = document.querySelector(".input");
//
let secPhone = document.querySelector(".Form .phone");
let secPhoneMassg = document.querySelector(".Form .phone .error>p");

const phonePattern = /^01[0125][0-9]{8}$/;

inputPhone.addEventListener("keyup", () => {
  if (!phonePattern.test(inputPhone.value)) {
    secPhoneMassg.innerHTML = "Please enter a Valid phone number";
    secPhone.classList.add("invalid");
  } else {
    secPhone.classList.remove("invalid");
  }
  if (inputPhone.value === "") {
    secPhoneMassg.innerHTML = "Phone number is required";
  }
});

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputPhone.value === "") {
    secPhoneMassg.innerHTML = "Phone number is required";
    secPhone.classList.add("invalid");
  } else {
    secPhoneMassg.innerHTML = "Please enter a Valid phone number";
  }
  //
  if (Validation(phonePattern, inputPhone, secPhone)) {
    window.location.assign("../OTP/otp.html");
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

// Links Header when mobile
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
