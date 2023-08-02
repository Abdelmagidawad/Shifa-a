//  Preloading Page
let preLoad = document.querySelector(".preloading");

window.addEventListener("load", function () {
  this.setTimeout(function () {
    preLoad.style.display = "none";
  }, 1000);
});
