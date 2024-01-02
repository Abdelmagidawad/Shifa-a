//  Preloading Page
let preLoad = document.querySelector(".preloading");

window.addEventListener("load", function () {
  this.setTimeout(function () {
    preLoad.style.display = "none";
  }, 1000);
});

// Links Header
let iconMenu = document.querySelector(".menu-links .icon");
let pLinks = document.querySelector(".menu-links .links");
let overlayLinks = document.querySelector(".nav-bar .overlinks");

iconMenu.addEventListener("click", () => {
  iconMenu.firstElementChild.classList.toggle("anemy2");
  iconMenu.firstElementChild.nextElementSibling.classList.toggle("anemy1");
  iconMenu.lastElementChild.classList.toggle("anemy3");
  pLinks.classList.toggle("visible");
  overlayLinks.classList.toggle("overvisible");
});

overlayLinks.addEventListener("click", () => {
  iconMenu.click();
});

// Scroll Top Code
let iconScrollTop = document.querySelector(".UP");

window.addEventListener("scroll", function () {
  this.scrollY >= 500
    ? iconScrollTop.classList.add("show")
    : iconScrollTop.classList.remove("show");
});

iconScrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Feedback Code
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
  slideRows[index].style.transform = "display 0.4s";

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

// to make a dynamic year
let elementYear = document.querySelector(".container > p span");
let currentYear = new Date().getFullYear();
elementYear.append(currentYear);
