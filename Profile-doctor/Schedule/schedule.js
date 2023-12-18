let selectDay = document.querySelectorAll(".select-day div");
let secNoapp = document.querySelector(".no-app");
let secListSchedule = document.querySelector(".list-patient-Sch");
// To Dynamic day&date
document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();

  for (let i = 1; i <= 6; i++) {
    const dayElement = document.getElementById(`day${i}`);
    const dateElement = document.getElementById(`date${i}`);

    // Calculate the date for each day
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + i - 1);

    dayElement.textContent = daysOfWeek[futureDate.getDay()];
    dateElement.textContent =
      (futureDate.getDate() < 10 ? "0" : "") + futureDate.getDate();
    //
    if (futureDate.getDate() === currentDate.getDate()) {
      selectDay[i - 1].style.cssText =
        "background-color: #246bfd;color: white;";
      dayElement.style.color = "white";
      selectDay[i - 1].click();
    }
  }
});
//
selectDay.forEach(function (element) {
  element.addEventListener("click", function () {
    //
    secNoapp.style.display = "none";
    secListSchedule.style.display = "block";
    //
    selectDay.forEach(function (ele) {
      ele.style.cssText = " background-color: white;color: #7d7987;";
      ele.lastElementChild.style.color = "#246bfd";
    });
    this.style.cssText = " background-color: #246bfd;color: white;";
    this.lastElementChild.style.color = "white";
  });
});

// when No Appointment test
selectDay[3].addEventListener("click", function () {
  secNoapp.style.display = "block";
  secListSchedule.style.display = "none";
});
selectDay[5].addEventListener("click", function () {
  secNoapp.style.display = "block";
  secListSchedule.style.display = "none";
});

// button canceled to remove box
let cancelBtn = document.querySelectorAll(".button .cancel");
let buttons = document.querySelectorAll(".button ");
let boxContent = document.querySelectorAll(".list-patient .box");

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

// button see more to apperance comment

let seeMoreBtn = document.querySelectorAll(".button .more");
let parentContentComment = document.querySelector(".popup-seeMore");
let closeButton = document.querySelector("#close i");
let overlay = document.querySelector(".seeMore-up .S-overlay");

// content PopUp seeMore data dynamic
let imagePatientPop = document.querySelector(".pop-head img");
let namePatientPop = document.querySelector(".pop-head h2");
let datePatientPop = document.querySelector(".popup-seeMore .time");
//
seeMoreBtn.forEach(function (ele) {
  ele.onclick = function (e) {
    parentContentComment.parentElement.classList.toggle("active");
    //
    imagePatientPop.setAttribute(
      "src",
      e.target.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute(
        "src"
      )
    );
    namePatientPop.innerHTML =
      e.target.parentElement.parentElement.firstElementChild.textContent;

    datePatientPop.firstElementChild.lastChild.textContent =
      e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;

    datePatientPop.lastElementChild.lastChild.textContent =
      e.target.parentElement.previousElementSibling.innerHTML;
    //
  };
});

closeButton.addEventListener("click", function () {
  parentContentComment.parentElement.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  closeButton.click();
});
