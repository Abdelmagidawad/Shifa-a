// Links Header
let iconMenu = document.querySelector(".menu-links .icon");
let pLinks = document.querySelector(".menu-links .links");

iconMenu.addEventListener("click", () => {
  iconMenu.firstElementChild.classList.toggle("anemy2");
  iconMenu.firstElementChild.nextElementSibling.classList.toggle("anemy1");
  iconMenu.lastElementChild.classList.toggle("anemy3");
  pLinks.classList.toggle("visible");
});

// Icon hidden&show password
let inputPassword = document.querySelector("[name='new-password']");
let inputConPassword = document.querySelector("[name='confirm-new-password']");
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
    inputConPassword.setAttribute("type", "text");
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
  } else {
    inputConPassword.setAttribute("type", "password");
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
  }
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
