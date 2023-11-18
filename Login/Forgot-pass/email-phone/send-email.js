// from validation
let inputEmail = document.querySelector("[name='email']");
let buttonSubmit = document.querySelector(".input");
//
let secEmail = document.querySelector(".Form .email");
let secEmailMassg = document.querySelector(".Form .email .error>p");

const mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

inputEmail.addEventListener("keyup", () => {
  if (!mailPattern.test(inputEmail.value)) {
    secEmailMassg.innerHTML = "Please enter a Valid email";
    secEmail.classList.add("invalid");
  } else {
    secEmail.classList.remove("invalid");
  }
  if (inputEmail.value === "") {
    secEmailMassg.innerHTML = "Email is required";
  }
});

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputEmail.value === "") {
    secEmailMassg.innerHTML = "Email is required";
    secEmail.classList.add("invalid");
  } else {
    secEmailMassg.innerHTML = "Please enter a Valid email";
  }
  //
  if (Validation(mailPattern, inputEmail, secEmail)) {
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
