// links appointments
let upcomingAppoint = document.querySelector(".links-appointments .up-appoint");
let canceledAppoint = document.querySelector(
  ".links-appointments .can-appoint"
);

upcomingAppoint.addEventListener("click", () => {
  window.location.assign("../Upcomming/upcom.html");
});
canceledAppoint.addEventListener("click", () => {
  window.location.assign("../Canceled/cancel.html");
});

// list doctor Completed
// this code to make the pop up responsive height

let closeBtn = document.querySelector("#cancl i");
let reviewBtn = document.querySelectorAll(".button .a");
let submit = document.querySelector("#submit");
let stars = document.querySelectorAll(".stars i");
let currentRate = document.querySelector(".current-rate");
let parentContentRate = document.querySelector(".popup-review");
let overlay = document.querySelector(".review-up .r-overlay");

// content PopUp Review data dynamic
let imgDoctorPopUp = document.querySelector(".popup-review .pop-head img");
let nameDoctorPopUp = document.querySelector(".popup-review .text h2");
//

reviewBtn.forEach(function (ele) {
  ele.onclick = function (e) {
    parentContentRate.parentElement.classList.toggle("active");
    //
    imgDoctorPopUp.setAttribute(
      "src",
      e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute(
        "src"
      )
    );

    nameDoctorPopUp.innerHTML = `Dr.${e.target.parentElement.parentElement.firstElementChild.textContent}`;
  };
});

closeBtn.addEventListener("click", function () {
  parentContentRate.parentElement.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  closeBtn.click();
});

// to test Button submit
let test = false;
submit.addEventListener("click", function () {
  if (test) {
    parentContentRate.parentElement.classList.toggle("active");
  }
  stars.forEach(function (star) {
    star.style.fontWeight = "200";
    currentRate.innerHTML = "0 of 5";
    test = false;
  });
});

////////

stars.forEach(function (star, i) {
  star.onclick = function () {
    let currentLevel = i + 1;
    currentRate.innerHTML = `${currentLevel} of 5`;
    stars.forEach(function (star, j) {
      if (currentLevel >= j + 1) {
        star.style.fontWeight = "bold";
        // test submit
        test = true;
      } else {
        star.style.fontWeight = "200";
      }
    });
  };
});
