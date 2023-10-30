// Generate qr code
let btnGenerateQR = document.querySelector(".patientmedical .qrCode button");
let generateOverlay = document.querySelector(".generat-QR .A-overlay");
let popUpGenerate = document.querySelector(".generat-QR .popup-QR");
let imgQrCode = document.querySelector(".generat-QR .popup-QR img");

btnGenerateQR.addEventListener("click", () => {
  // Error
  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${"../P-MedicalCard/QRCodePageMC/MedicalCard.html"} `;
  // Error
  popUpGenerate.parentElement.classList.toggle("active");
});

generateOverlay.addEventListener("click", () =>
  popUpGenerate.parentElement.classList.toggle("active")
);

// Edit Mobile Number
let buttonsEdit = document.querySelectorAll(".sec-contact .cont button");

let popUpEditPhone = document.querySelector(".edit-Phone .popup-Edit");
let editOverlay = document.querySelector(".edit-Phone .a-overlay");
let editSaveBtn = document.querySelector(".FormEdit #save");
let editCancelBtn = document.querySelector(".FormEdit #cancel");
let inputPhone = document.querySelector("input[name='Phone']");

let phoneNum;
// to Show Edit PopUp
buttonsEdit.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    popUpEditPhone.parentElement.classList.toggle("active");
    inputPhone.value = btn.previousElementSibling.lastElementChild.innerHTML;
    inputPhone.focus();
    phoneNum = e.target.previousElementSibling.lastElementChild;
  });
});

editCancelBtn.addEventListener("click", () => {
  popUpEditPhone.parentElement.classList.toggle("active");
});
editOverlay.addEventListener("click", () => editCancelBtn.click());

editSaveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputPhone.value !== "") {
    phoneNum.innerHTML = inputPhone.value;
    editCancelBtn.click();
  }
});
