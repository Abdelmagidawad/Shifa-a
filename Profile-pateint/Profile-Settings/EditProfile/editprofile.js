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

let inputFName = document.querySelector("[name='first-name']");
let inputLName = document.querySelector("[name='last-name']");
let inputAge = document.querySelector("[name='date-of-birth']");
let inputPhone = document.querySelector("[name='phone']");
//
let secFName = document.querySelector(".Form .f-name");
let secFNameMassg = document.querySelector(".Form .f-name .error>p");
let secLName = document.querySelector(".Form .l-name");
let secLNameMassg = document.querySelector(".Form .l-name .error>p");
let secAge = document.querySelector(".Form .date");
let secPhone = document.querySelector(".Form .phone");
let secPhoneMassg = document.querySelector(".Form .phone .error>p");

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

inputAge.addEventListener("keyup", updateErrorMessageAge);

function updateErrorMessageAge() {
  if (inputAge.value === "") {
    secAge.classList.add("invalid");
  } else {
    secAge.classList.remove("invalid");
  }
  inputAge.addEventListener("change", () => {
    if (inputAge.value !== "") {
      secAge.classList.remove("invalid");
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

function validateForm() {
  //
  if (
    !Validation(namePattern, inputFName, secFName) ||
    !Validation(namePattern, inputLName, secLName) ||
    inputAge.value === "" ||
    !Validation(phonePattern, inputPhone, secPhone)
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
