let inputCurrPassword = document.querySelector("[name='current password']");
let inputNewPassword = document.querySelector("[name='new password']");
let inputConNewPassword = document.querySelector("[name='confirm password']");

// Icon hidden&show password
let iconsPassword = document.querySelectorAll(".Form >div >i");

iconsPassword.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    showPassword(e.target.previousElementSibling, icon);
  });
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

// validation inputs/
let buttonSave = document.querySelector(".save");

let secCurPassword = document.querySelector(".Form .Curr-pass");
let secCurPasswordMassg = document.querySelector(".Form .Curr-pass .error>p");
let secNewPassword = document.querySelector(".Form .pass");
let secNewPasswordMassg = document.querySelector(".Form .pass .error>p");
let secConPassword = document.querySelector(".Form .con-pass");
let secConPasswordMassg = document.querySelector(".Form .con-pass .error>p");

const passPattern = /^(?=.*\d)?(?=.*[a-z])?(?=.*[A-Z])?.{8,16}$/;

buttonSave.addEventListener("click", function (event) {
  event.preventDefault();

  let isValid = validateForm();
  //
  if (isValid) {
    alert("Valid Test");
  }
});

buttonSave.addEventListener("click", function (event) {
  event.preventDefault();
  //Curr Password
  CheckInputEmpty(
    inputCurrPassword,
    secCurPasswordMassg,
    secCurPassword,
    "Current Password is required",
    "Password must be between 8 and 16 characters"
  );

  //New Password
  CheckInputEmpty(
    inputNewPassword,
    secNewPasswordMassg,
    secNewPassword,
    "New Password is required",
    "Password must be between 8 and 16 characters"
  );

  //Confirm New Password
  CheckInputEmpty(
    inputConNewPassword,
    secConPasswordMassg,
    secConPassword,
    "Confirm password is required",
    "Confirm Password don't match"
  );
});

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

//
inputCurrPassword.addEventListener("keyup", () => {
  testVWKeyUp(
    passPattern,
    inputCurrPassword,
    secCurPassword,
    secCurPasswordMassg,
    "Password must be between 8 and 16 characters",
    "Current Password is required"
  );
});
inputNewPassword.addEventListener("keyup", () => {
  testVWKeyUp(
    passPattern,
    inputNewPassword,
    secNewPassword,
    secNewPasswordMassg,
    "Password must be between 8 and 16 characters",
    "New Password is required"
  );
});

inputConNewPassword.addEventListener("keyup", () => {
  if (inputNewPassword.value !== inputConNewPassword.value) {
    secConPasswordMassg.innerHTML = "Confirm Password don't match";
    secConPassword.classList.add("invalid");
  } else {
    secConPassword.classList.remove("invalid");
  }
  if (inputConNewPassword.value === "") {
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

function validateForm() {
  //
  if (
    !Validation(passPattern, inputCurrPassword, secCurPassword) ||
    !Validation(passPattern, inputNewPassword, secNewPassword) ||
    inputNewPassword.value !== inputConNewPassword.value
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
