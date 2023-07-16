var nextButton = document.getElementById("next");
var prevButton = document.getElementById("previse");
var slideContainer = document.getElementById("slide");
var slideRows = slideContainer.getElementsByClassName("slide-row");

let dotsIcone = document.querySelectorAll(".dots li");

var currentSlideIndex = 0;

// Function to show the current slide

function showSlide(index) {
  // Hide all the slide rows
  for (var i = 0; i < slideRows.length; i++) {
    slideRows[i].style.display = "none";

    dotsIcone[i].classList.remove("active");
  }

  slideRows[index].style.display = "block";

  dotsIcone[index].classList.add("active");

  // Enable/disable buttons and set cursor style based on slide index
  if (index === 0) {
    prevButton.disabled = true;
    nextButton.disabled = false;
    prevButton.style.cursor = "not-allowed";
    nextButton.style.cursor = "pointer";
  } else if (index === slideRows.length - 1) {
    prevButton.disabled = false;
    nextButton.disabled = true;
    prevButton.style.cursor = "pointer";
    nextButton.style.cursor = "not-allowed";
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
    prevButton.style.cursor = "pointer";
    nextButton.style.cursor = "pointer";
  }
}

function nextSlide() {
  currentSlideIndex++;

  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex--;

  showSlide(currentSlideIndex);
}
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Show the initial slide
showSlide(currentSlideIndex);
