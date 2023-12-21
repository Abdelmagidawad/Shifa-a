import { NetworkHelper } from "../../../Network/remoteHelper.js";

import { getCookieValue } from "../../../Local/localHelper.js";

const networkHelper = new NetworkHelper();

const doctorId = getCookieValue("userId");

// networkHelper
//   .fetchAllDoctorsDataFromDatabase()
//   .then((dataList) => {
//     // Use the data list here
//     console.log(dataList);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error(error);
//   });

//***************************************************************** */
// sort specialty
const selectElement = document.querySelector("select[name='specialty']");
const options = Array.from(selectElement.options);

options.sort((a, b) => a.text.localeCompare(b.text));

options.forEach((option) => {
  selectElement.add(option);
});

// Get the search input and select elements
const searchInput = document.querySelector('input[name="namedoctor"]');
const specialtySelect = document.querySelector('select[name="specialty"]');
const doctorBoxes = Array.from(document.querySelectorAll(".list-doc .box"));
//
let noResult = document.querySelector(".no-result");

//Function to filter doctors
function filterDoctors() {
  const searchValue = searchInput.value.toLowerCase();
  let foundResults = false;

  doctorBoxes.forEach((box) => {
    const name = box.querySelector("h3").textContent.toLowerCase();
    const matchesSearch = name.includes(searchValue);
    if (matchesSearch) {
      box.style.display = "block";
      foundResults = true;
    } else {
      box.style.display = "none";
    }
    //
    if (foundResults) {
      noResult.style.display = "none";
    } else {
      noResult.style.display = "block";
    }
  });
}

searchInput.addEventListener("input", filterDoctors);

// filter Specialty
specialtySelect.addEventListener("change", function () {
  const specialtyValue = specialtySelect.value.toLowerCase();
  let foundResults = false;

  doctorBoxes.forEach((box) => {
    const specialty = box.querySelector(".spe span").textContent.toLowerCase();
    const containsSpecialty = specialty.includes(specialtyValue);

    if (specialtyValue === "" || containsSpecialty) {
      box.classList.remove("hidden");
      foundResults = true;
    } else {
      box.classList.add("hidden");
    }
  });

  if (foundResults) {
    noResult.style.display = "none";
  } else {
    noResult.style.display = "block";
  }
});

// filter Gender
const genderSelect = document.querySelector('select[name="gender"]');
const genderValue = genderSelect.value.toLowerCase();

genderSelect.oninput = function () {
  if (genderSelect.value === "Male") {
    doctorBoxes.forEach(function (box, i) {
      doctorBoxes[2].style.display = "none";
      doctorBoxes[3].style.display = "none";
      doctorBoxes[6].style.display = "none";
      doctorBoxes[0].style.display = "block";
      doctorBoxes[1].style.display = "block";
      doctorBoxes[4].style.display = "block";
      doctorBoxes[5].style.display = "block";
      doctorBoxes[7].style.display = "block";
    });
  }
  if (genderSelect.value === "Female") {
    doctorBoxes.forEach(function (box, i) {
      doctorBoxes[0].style.display = "none";
      doctorBoxes[1].style.display = "none";
      doctorBoxes[4].style.display = "none";
      doctorBoxes[5].style.display = "none";
      doctorBoxes[7].style.display = "none";
      doctorBoxes[2].style.display = "block";
      doctorBoxes[3].style.display = "block";
      doctorBoxes[6].style.display = "block";
    });
  }
};
