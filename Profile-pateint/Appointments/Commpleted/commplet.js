// let closeBtn = document.querySelector("#cancl i");
// let reviewBtn = document.querySelectorAll(".button .a");
// let submit = document.querySelector("#submit");
// let stars = document.querySelectorAll(".stars i");
// let currentRate = document.querySelector(".current-rate");
// let parentContentRate = document.querySelector(".popup-review");

// reviewBtn.forEach(function (ele) {
//   ele.onclick = function () {
//     document.getElementById("Rup").classList.toggle("active");
//   };
// });

// closeBtn.addEventListener("click", function () {
//   parentContentRate.parentElement.classList.toggle("active");
// });

// stars.forEach(function (star, i) {
//   star.onclick = function () {
//     let currentLevel = i + 1;
//     currentRate.innerHTML = `${currentLevel} of 5`;
//     stars.forEach(function (star, j) {
//       if (currentLevel >= j + 1) {
//         star.style.fontWeight = "bold";
//       } else {
//         star.style.fontWeight = "200";
//       }
//     });
//   };
// });

// ******************

// this code to make the pop up responsive height

let closeBtn = document.querySelector("#cancl i");
let reviewBtn = document.querySelectorAll(".button .a");
let submit = document.querySelector("#submit");
let stars = document.querySelectorAll(".stars i");
let currentRate = document.querySelector(".current-rate");
let parentContentRate = document.querySelector(".popup-review");

reviewBtn.forEach(function (ele) {
  ele.onclick = function () {
    parentContentRate.parentElement.classList.toggle("active");
    let reviewBtnRect = ele.getBoundingClientRect();
    let topPosition = reviewBtnRect.top + window.pageYOffset;
    parentContentRate.style.top = `${topPosition}px`;
  };
});

closeBtn.addEventListener("click", function () {
  parentContentRate.parentElement.classList.toggle("active");
});

// to test Button submit
submit.addEventListener("click", function () {
  stars.forEach(function (star) {
    star.style.fontWeight = "200";
    currentRate.innerHTML = "0 of 5";
  });
  // parentContentRate.parentElement.classList.toggle("active");
});

////////

stars.forEach(function (star, i) {
  star.onclick = function () {
    let currentLevel = i + 1;
    currentRate.innerHTML = `${currentLevel} of 5`;
    stars.forEach(function (star, j) {
      if (currentLevel >= j + 1) {
        star.style.fontWeight = "bold";
      } else {
        star.style.fontWeight = "200";
      }
    });
  };
});
