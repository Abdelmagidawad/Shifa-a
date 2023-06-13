let selectDay = document.querySelectorAll(".select-day div");

selectDay.forEach(function (element) {
  element.addEventListener("click", function () {
    selectDay.forEach(function (ele) {
      ele.style.cssText = " background-color: white;color: #7d7987;";
      ele.firstElementChild.style.color = "#246bfd";
    });
    this.style.cssText = " background-color: #246bfd;color: white;";
    this.firstElementChild.style.color = "white";
  });
});
