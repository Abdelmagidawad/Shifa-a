import { NetworkHelper } from "../../Network/remoteHelper.js";

let inputFName = document.querySelector("[name='first-name']");
let inputLName = document.querySelector("[name='last-name']");
let inputAge = document.querySelector("[name='date-of-birth']");
let inputGender = document.querySelectorAll("input[name = 'gender']");
let inputEmail = document.querySelector("[name='email']");
let inputPhone = document.querySelector("[name='phone']");
let inputPassword = document.querySelector("[name='password']");
let inputPasswordCon = document.querySelector("[name='confirm password']");
let buttonSubmit = document.querySelector(".input");
let selectedGender = "";
//
let secFName = document.querySelector(".Form .f-name");
let secFNameMassg = document.querySelector(".Form .f-name .error>p");
let secLName = document.querySelector(".Form .l-name");
let secLNameMassg = document.querySelector(".Form .l-name .error>p");
let secAge = document.querySelector(".Form .date");
let secGender = document.querySelector(".Form .gender");
let secEmail = document.querySelector(".Form .email");
let secEmailMassg = document.querySelector(".Form .email .error>p");
let secPhone = document.querySelector(".Form .phone");
let secPhoneMassg = document.querySelector(".Form .phone .error>p");
let secPassword = document.querySelector(".Form .pass");
let secPasswordMassg = document.querySelector(".Form .pass .error>p");
let secConPassword = document.querySelector(".Form .con-pass");
let secConPasswordMassg = document.querySelector(".Form .con-pass .error>p");
let inputMale = document.querySelector(".gender #mal");
let inputFemale = document.querySelector(".gender #fem");

const networkHelper = new NetworkHelper();

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  inputGender.forEach(function (input) {
    if (input.checked) {
      selectedGender = input.value;
    }
  });

  let isValid = validateForm();
  if (isValid) {
    const patient = new Patient(
      inputFName.value,
      inputLName.value,
      inputAge.value,
      selectedGender,
      inputPhone.value,
      inputEmail.value
    );

    networkHelper
      .createPatientWithEmailAndPasswordAndWriteData(
        patient,
        inputPassword.value
      )
      .then((message) => {
        // Success handling
        window.location.assign("../../Login/login.html");
        // "Success"
      })
      .catch((errorMessage) => {
        // Error handling
        console.error(errorMessage);
      });
  }
});

// ----
buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  // FirstName
  CheckInputEmpty(
    inputFName,
    secFNameMassg,
    secFName,
    "First Name is required",
    "Please enter first name only"
  );
  // LastName
  CheckInputEmpty(
    inputLName,
    secLNameMassg,
    secLName,
    "Last Name is required",
    "Please enter last name only"
  );
  //Age
  updateErrorMessageAge();
  //Gender
  updateErrorMessageGender();
  //Email
  CheckInputEmpty(
    inputEmail,
    secEmailMassg,
    secEmail,
    "Email is required",
    "Please enter a Valid email"
  );
  //Phone
  CheckInputEmpty(
    inputPhone,
    secPhoneMassg,
    secPhone,
    "Phone number is required",
    "Please enter a Valid phone number"
  );
  //Password
  CheckInputEmpty(
    inputPassword,
    secPasswordMassg,
    secPassword,
    "Password is required",
    "Password must be between 8 and 16 characters"
  );
  //Confirm Password
  CheckInputEmpty(
    inputPasswordCon,
    secConPasswordMassg,
    secConPassword,
    "Confirm password is required",
    "Password don't match"
  );

  function CheckInputEmpty(
    inputField,
    secInputMassg,
    secInput,
    massageDefault,
    massageReplace
  ) {
    if (inputField.value === "") {
      secInputMassg.innerHTML = massageDefault;
      secInput.classList.add("invalid");
    } else {
      secInputMassg.innerHTML = massageReplace;
    }
  }
});
// ----

// ***************
//----
const namePattern = /^[a-zA-Z\-]+$/;
const mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const phonePattern = /^01[0125][0-9]{8}$/;
const passPattern = /^(?=.*\d)?(?=.*[a-z])?(?=.*[A-Z])?.{8,16}$/;

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

inputMale.addEventListener("change", updateErrorMessageGender);
inputFemale.addEventListener("change", updateErrorMessageGender);
function updateErrorMessageGender() {
  if (inputMale.checked || inputFemale.checked) {
    secGender.classList.remove("invalid");
  } else {
    secGender.classList.add("invalid");
  }
}

inputEmail.addEventListener("keyup", () => {
  testVWKeyUp(
    mailPattern,
    inputEmail,
    secEmail,
    secEmailMassg,
    "Please enter a Valid email",
    "Email is required"
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

inputPassword.addEventListener("keyup", () => {
  testVWKeyUp(
    passPattern,
    inputPassword,
    secPassword,
    secPasswordMassg,
    "Password must be between 8 and 16 characters",
    "Password is required"
  );
});

inputPasswordCon.addEventListener("keyup", () => {
  if (inputPassword.value !== inputPasswordCon.value) {
    secConPasswordMassg.innerHTML = "Password don't match";
    secConPassword.classList.add("invalid");
  } else {
    secConPassword.classList.remove("invalid");
  }
  if (inputPasswordCon.value === "") {
    secConPasswordMassg.innerHTML = "Confirm password is required";
  }
});

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
// -------

function validateForm() {
  //
  if (
    !Validation(namePattern, inputFName, secFName) ||
    !Validation(namePattern, inputLName, secLName) ||
    inputAge.value === "" ||
    selectedGender === "" ||
    !Validation(mailPattern, inputEmail, secEmail) ||
    !Validation(phonePattern, inputPhone, secPhone) ||
    !Validation(passPattern, inputPassword, secPassword) ||
    inputPassword.value !== inputPasswordCon.value
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

// ***************

// Icon hidden&show password
let iconPass = document.querySelector(".pass i");
let iconConPass = document.querySelector(".con-pass i");

iconPass.addEventListener("click", () => {
  showPassword(inputPassword, iconPass);
});

iconConPass.addEventListener("click", () => {
  showPassword(inputPasswordCon, iconConPass);
});

function showPassword(input, icon) {
  if (icon.classList.contains("fa-eye-slash")) {
    input.setAttribute("type", "text");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.setAttribute("type", "password");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

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

// Scroll Top Code
let iconScrollTop = document.querySelector(".UP");

window.addEventListener("scroll", function () {
  this.scrollY >= 300
    ? iconScrollTop.classList.add("show")
    : iconScrollTop.classList.remove("show");
});

iconScrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
