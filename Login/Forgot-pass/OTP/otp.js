// from validation
let form = document.querySelector(".Form");
let inputsCode = document.querySelectorAll("[name='code']");
let buttonVerify = document.querySelector(".input");
//
// let secCodeMassg = document.querySelector(".Form .error>p");

let coutT = 0;
inputsCode.forEach((ele) => {
  ele.addEventListener("input", () => {
    ele.value !== "" ? coutT++ : coutT--;
  });
  ele.addEventListener("blur", () => {
    if (coutT === 4) form.classList.remove("invalid");
    else form.classList.add("invalid");
  });
});

buttonVerify.addEventListener("click", function (event) {
  event.preventDefault();

  inputsCode.forEach((ele) => {
    if (ele.value === "") {
      form.classList.add("invalid");
    } else {
      form.classList.remove("invalid");
    }
  });
  //
  if (coutT === 4) window.location.assign("../reset-pass/reset-pass.html");
  //
});

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

//input OTP

window.onload = function () {
  // inputsCode[0].focus();
};

inputsCode.forEach(function (ele, index, array) {
  ele.oninput = function () {
    if (ele.value !== "" && ele.value < 10) {
      ele.blur();
      array[index + 1].focus();
    }
  };
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
