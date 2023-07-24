let slector = document.querySelector("[name='filter']");
let statPending = document.querySelectorAll("tbody tr.pending");
let statAccepted = document.querySelectorAll("tbody tr.accept");
let statDecline = document.querySelectorAll("tbody tr.decline");

let pendingNum = document.querySelector(".main-heading span");
pendingNum.innerHTML = statPending.length;

slector.oninput = function () {
  if (slector.value === "All") {
    statPending.forEach(function (ele) {
      ele.style.display = "revert";
    });
    statAccepted.forEach(function (ele) {
      ele.style.display = "revert";
    });
    statDecline.forEach(function (ele) {
      ele.style.display = "revert";
    });
  }
  if (slector.value === "Pending") {
    statPending.forEach(function (ele) {
      ele.style.display = "revert";
    });
    statAccepted.forEach(function (ele) {
      ele.style.display = "none";
    });
    statDecline.forEach(function (ele) {
      ele.style.display = "none";
    });
  }
  if (slector.value === "Accepted") {
    statAccepted.forEach(function (ele) {
      ele.style.display = "revert";
    });

    statPending.forEach(function (ele) {
      ele.style.display = "none";
    });
    statDecline.forEach(function (ele) {
      ele.style.display = "none";
    });
  }
  if (slector.value === "Declined") {
    statDecline.forEach(function (ele) {
      ele.style.display = "revert";
    });
    statPending.forEach(function (ele) {
      ele.style.display = "none";
    });
    statAccepted.forEach(function (ele) {
      ele.style.display = "none";
    });
  }
};
