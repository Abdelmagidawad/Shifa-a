//Select Day
let selectDay = document.querySelectorAll(".select-day div");
let secNoMedicne = document.querySelector(".no-medicine");
let secMedicne = document.querySelector(".sec-medicine");
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
    // test
    secNoMedicne.style.display = "none";
    secMedicne.style.display = "grid";
    //
    selectDay.forEach(function (ele) {
      ele.style.cssText = " background-color: white;color: #7d7987;";
      ele.lastElementChild.style.color = "#246bfd";
    });
    this.style.cssText = " background-color: #246bfd;color: white;";
    this.lastElementChild.style.color = "white";
  });
});

// when No Medicine test
selectDay[3].addEventListener("click", function () {
  secNoMedicne.style.display = "block";
  secMedicne.style.display = "none";
});
selectDay[5].addEventListener("click", function () {
  secNoMedicne.style.display = "block";
  secMedicne.style.display = "none";
});

// when Click Medicine Show  Details
let boxMedicine = document.querySelectorAll(".sec-medicine .box-med");
let parentContentMedicine = document.querySelector(".popup-details");
let closeButton = document.querySelector("#close i");
let overlay = document.querySelector(".details-up .D-overlay");

// content PopUp details medicine dynamic
let imageMedicinePop = document.querySelector(".popup-details img");
let nameMedicinePop = document.querySelector(".details #name span");
//
boxMedicine.forEach(function (ele) {
  ele.addEventListener("click", (e) => {
    parentContentMedicine.parentElement.classList.toggle("active");
    //
    imageMedicinePop.setAttribute(
      "src",
      e.currentTarget.firstElementChild.getAttribute("src")
    );
    nameMedicinePop.innerHTML =
      e.currentTarget.lastElementChild.firstElementChild.textContent;
    //
  });
});

closeButton.addEventListener("click", function () {
  parentContentMedicine.parentElement.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  closeButton.click();
});
