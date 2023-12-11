let selectDay = document.querySelectorAll(".select-day div");
let secNoMedicne = document.querySelector(".no-medicine");
let secMedicne = document.querySelector(".sec-medicine");

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
