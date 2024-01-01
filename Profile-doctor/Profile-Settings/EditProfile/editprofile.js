// To Upload Image Profile
let btnEditImg = document.querySelector(".image i");
let imgProfile = document.querySelector(".image img");
let inputFile = document.querySelector("[type='file']");

btnEditImg.addEventListener("click", () => {
  inputFile.click();
});

inputFile.addEventListener("change", () => {
  imgProfile.setAttribute("src", URL.createObjectURL(inputFile.files[0]));
});

// validation inputs
let buttonSave = document.querySelector(".buttons .save");
let buttonCancel = document.querySelector(".buttons .cancel");
//
let inputFName = document.querySelector("[name='first-name']");
let inputLName = document.querySelector("[name='last-name']");
let inputAge = document.querySelector("[name='date-of-birth']");
let inputPhone = document.querySelector("[name='phone']");
let inputRating = document.querySelector("[name='rating']");
let inputSpecialty = document.querySelector("[name='specialty']");
//
let secFName = document.querySelector(".Form .f-name");
let secFNameMassg = document.querySelector(".Form .f-name .error>p");
let secLName = document.querySelector(".Form .l-name");
let secLNameMassg = document.querySelector(".Form .l-name .error>p");
let secPhone = document.querySelector(".Form .phone");
let secPhoneMassg = document.querySelector(".Form .phone .error>p");
let secRating = document.querySelector(".Form .rating");
let secRatingMassg = document.querySelector(".Form .rating .error>p");
let secSpecialty = document.querySelector(".Form .specialty");

buttonSave.addEventListener("click", function (event) {
  event.preventDefault();

  let isValid = validateForm();
  //
  if (isValid) {
    alert("Valid Test");
  }
});

// ***************
const namePattern = /^[a-zA-Z\-]+$/;
const phonePattern = /^01[0125][0-9]{8}$/;
const ratingPattern = /^[1-5](\.\d{1,2})?$/;

inputFName.addEventListener("keyup", () => {
  testVWKeyUp(
    namePattern,
    inputFName,
    secFName,
    secFNameMassg,
    "Please enter first name only",
    "First Name is required"
  );
});

inputLName.addEventListener("keyup", () => {
  testVWKeyUp(
    namePattern,
    inputLName,
    secLName,
    secLNameMassg,
    "Please enter Last name only",
    "Last Name is required"
  );
});

inputPhone.addEventListener("keyup", () => {
  testVWKeyUp(
    phonePattern,
    inputPhone,
    secPhone,
    secPhoneMassg,
    "Please enter a Valid phone number",
    "Phone number is required"
  );
});

inputRating.addEventListener("keyup", () => {
  testVWKeyUp(
    ratingPattern,
    inputRating,
    secRating,
    secRatingMassg,
    "Please enter a Valid Rating number",
    "Rating number is required"
  );
});

inputSpecialty.addEventListener("keyup", updateErrorMessageSpecialty);

function updateErrorMessageSpecialty() {
  if (inputSpecialty.value === "") {
    secSpecialty.classList.add("invalid");
  } else {
    secSpecialty.classList.remove("invalid");
  }
  inputSpecialty.addEventListener("change", () => {
    if (inputSpecialty.value !== "") {
      secSpecialty.classList.remove("invalid");
    }
  });
}

function testVWKeyUp(
  pattern,
  inputField,
  secInput,
  secInputMassg,
  defaultmassage,
  replacemassage
) {
  if (!pattern.test(inputField.value)) {
    secInputMassg.innerHTML = defaultmassage;
    secInput.classList.add("invalid");
  } else {
    secInput.classList.remove("invalid");
  }
  if (inputField.value === "") {
    secInputMassg.innerHTML = replacemassage;
  }
}
// **********
function validateForm() {
  //
  if (
    !Validation(namePattern, inputFName, secFName) ||
    !Validation(namePattern, inputLName, secLName) ||
    !Validation(phonePattern, inputPhone, secPhone) ||
    !Validation(ratingPattern, inputRating, secRating) ||
    inputSpecialty.value === ""
  )
    return false;
  return true;
}

function Validation(pattern, inputField, secFiled) {
  if (!pattern.test(inputField.value)) {
    secFiled.classList.add("invalid");
    return false;
  } else {
    secFiled.classList.remove("invalid");
    return true;
  }
}

// sort specialty
function sortDatalistOptions() {
  const datalist = document.getElementById("specialty");
  const options = Array.from(datalist.options);
  options.sort((a, b) => a.value.localeCompare(b.value));

  // Clear existing options in the datalist
  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }

  // Add sorted options back to the datalist
  options.forEach((option) => {
    datalist.appendChild(option);
  });
}

sortDatalistOptions();
