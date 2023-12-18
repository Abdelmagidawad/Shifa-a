let currentDate = document.querySelector(".headd .current-date ");
let daysTag = document.querySelector(".calender .days");
let prevnextIcone = document.querySelectorAll(".slider i");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalender() {
  let firstDateofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  //create li of previous month last days
  for (let i = firstDateofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  //create li of all days of current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  //create li of the next month first days
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
}

renderCalender();

prevnextIcone.forEach((icone) => {
  icone.addEventListener("click", () => {
    currMonth = icone.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0) {
      currYear--;
      currMonth = 11;
    } else if (currMonth > 11) {
      currYear++;
      currMonth = 0;
    }
    renderCalender();
  });
});

//to active select day
let Days = document.querySelectorAll(".days li");
Days.forEach(function (day) {
  day.addEventListener("click", (e) => {
    Days.forEach(function (el) {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// ******************
let Hours = document.querySelectorAll(".time li p");
let currentHour = new Intl.DateTimeFormat("en-us", {
  hour: "numeric",
  minute: "numeric",
}).format();

// to active the current hour
Hours.forEach((hour) => {
  if (hour.innerHTML === currentHour) {
    hour.classList.add("active");
  }
});

//to active select hour
Hours.forEach(function (hour) {
  hour.addEventListener("click", (e) => {
    Hours.forEach(function (el) {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
