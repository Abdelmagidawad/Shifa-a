let Day = document.querySelectorAll("tbody tr td");

Day.forEach(function (element) {
  element.addEventListener("click", function () {
    Day.forEach(function (el) {
      el.style.cssText = "color:normal;background-color:normal;";

      Day[19].style.cssText = "color:black;background-color:transparent;";
    });
    this.style.cssText = "color:white;background-color:#246bfd;";
  });
});

let Hour = document.querySelectorAll("ul li p");

Hour.forEach(function (element) {
  element.addEventListener("click", function () {
    Hour.forEach(function (el) {
      el.style.cssText = "color:normal;background-color:normal;";
      Hour[5].style.cssText = "color:#246bfd;background-color:transparent;";
    });
    this.style.cssText = "color:white;background-color:#246bfd;";
  });
});
