let selectDay = document.querySelectorAll(".select-day div");
let secNoapp = document.querySelector(".no-app");
let secListSchedule = document.querySelector(".list-patient-Sch");

selectDay.forEach(function (element) {
  element.addEventListener("click", function () {
    //
    secNoapp.style.display = "none";
    secListSchedule.style.display = "block";
    //
    selectDay.forEach(function (ele) {
      ele.style.cssText = " background-color: white;color: #7d7987;";
      ele.firstElementChild.style.color = "#246bfd";
    });
    this.style.cssText = " background-color: #246bfd;color: white;";
    this.firstElementChild.style.color = "white";
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

seeMoreBtn.forEach(function (ele) {
  ele.onclick = function () {
    parentContentComment.parentElement.classList.toggle("active");
  };
});

closeButton.addEventListener("click", function () {
  parentContentComment.parentElement.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  closeButton.click();
});
