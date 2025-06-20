// links appointments
let completeAppoint = document.querySelector(
  ".links-appointments .com-appoint"
);
let canceledAppoint = document.querySelector(
  ".links-appointments .can-appoint"
);

completeAppoint.addEventListener("click", () => {
  window.location.assign("../Commpleted/commplet.html");
});
canceledAppoint.addEventListener("click", () => {
  window.location.assign("../Canceled/cancel.html");
});

// list doctor Upcoming
// let cancelBtn = document.querySelectorAll(".button .cancel");
// let buttons = document.querySelectorAll(".button ");
// let boxContent = document.querySelectorAll(".list-doctor .box");

// cancelBtn.forEach(function (btn, i) {
//   btn.onclick = function () {
//     buttons[i].parentElement.style.display = "none";
//   };
// });

let cancelBtn = document.querySelectorAll(".button .cancel");
let buttons = document.querySelectorAll(".button ");
let boxContent = document.querySelectorAll(".list-doctor .box");

cancelBtn.forEach(function (btn, i) {
  btn.onclick = function () {
    buttons[i].parentElement.style.opacity = "0";
    buttons[i].parentElement.style.transform = "scale(0)";
    setTimeout(function () {
      buttons[i].parentElement.style.display = "none";
    }, 500); // Increase the transition duration to 500 milliseconds
  };
});

boxContent.forEach(function (box) {
  box.addEventListener("transitionend", function (event) {
    if (event.propertyName === "opacity" && box.style.opacity === "0") {
      box.style.display = "none";
    }
  });
});
