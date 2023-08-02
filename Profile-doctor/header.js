// Links Header
let iconMenu = document.querySelector(".menu-links .icon");
let pLinks = document.querySelector(".menu-links .links");

iconMenu.addEventListener("click", () => {
  iconMenu.firstElementChild.classList.toggle("anemy2");
  iconMenu.firstElementChild.nextElementSibling.classList.toggle("anemy1");
  iconMenu.lastElementChild.classList.toggle("anemy3");
  pLinks.classList.toggle("visiblle");
});

let notificationIcon = document.querySelector(".note>i");
let notifications = document.querySelector(".note .content-note");

notificationIcon.addEventListener("click", () => {
  notifications.classList.toggle("show");
});

let imagHeader = document.querySelector(".Profile-toltab img");
let toolTip = document.querySelector(".Profile-toltab .tol-tab");

imagHeader.addEventListener("click", function () {
  toolTip.classList.toggle("visible");
});

// Scroll Top Code
let iconScrollTop = document.querySelector(".UP");

window.addEventListener("scroll", function () {
  this.scrollY >= 400
    ? iconScrollTop.classList.add("Showw")
    : iconScrollTop.classList.remove("Showw");
});

iconScrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
