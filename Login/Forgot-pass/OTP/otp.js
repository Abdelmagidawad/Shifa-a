let inputs = document.querySelectorAll(".code input");

window.onload = function () {
  inputs[0].focus();
};

inputs.forEach(function (ele, index, array) {
  ele.oninput = function () {
    if (ele.value !== "" && ele.value < 10) {
      ele.blur();
      array[index + 1].focus();
    }
  };
});
