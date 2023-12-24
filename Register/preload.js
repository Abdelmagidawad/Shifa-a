//  Preloading Page
let preLoad = document.querySelector(".preloading");

window.addEventListener("load", function () {
  this.setTimeout(function () {
    preLoad.style.display = "none";
  }, 1000);
});

// to make a dynamic year
let elementYear = document.querySelector(".container > p span");
let currentYear = new Date().getFullYear();
elementYear.append(currentYear);
