let imagHeader = document.querySelector(".Profile-toltab img");
let toolTip = document.querySelector(".Profile-toltab .tol-tab");

imagHeader.addEventListener("click", function () {
  toolTip.classList.toggle("visible");
});
