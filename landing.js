let parentSlid = document.getElementById("slide");
let contentSlid = document.querySelectorAll(".test .slide-row");

let preButton = document.querySelector(".scroll-icone #previse");
let nextButton = document.querySelector(".scroll-icone #next");

let currentIndex = 0;

nextButton.onclick = function () {
  if (currentIndex < contentSlid.length - 1) {
    currentIndex++;

    // Calculate the translation distance based on the width of slide-row elements
    let slideWidth = contentSlid[0].offsetWidth; // Assuming all slide-rows have the same width
    let translation =
      (-(currentIndex * slideWidth * 1.03) / parentSlid.offsetWidth) * 100 +
      2.5;
    parentSlid.style.transform = `translateX(${translation}%)`;

    // Check if the next button is at the last slide-row
    if (currentIndex === contentSlid.length - 1) {
      nextButton.style.cursor = "no-drop";
    } else {
      nextButton.style.cursor = "pointer";
    }

    // Reset the cursor style of the previous button
    preButton.style.cursor = "pointer";
  }
};

preButton.onclick = function () {
  if (currentIndex > 0) {
    currentIndex--;

    // Calculate the translation distance based on the width of slide-row elements
    let slideWidth = contentSlid[0].offsetWidth; // Assuming all slide-rows have the same width
    let translation =
      (-(currentIndex * slideWidth * 1.03) / parentSlid.offsetWidth) * 100 +
      2.5;
    parentSlid.style.transform = `translateX(${translation}%)`;

    // Check if the previous button is at the first slide-row
    if (currentIndex === 0) {
      preButton.style.cursor = "no-drop";
    } else {
      preButton.style.cursor = "pointer";
    }

    // Reset the cursor style of the next button
    nextButton.style.cursor = "pointer";
  }
};
