// Generate qr code
let btnGenerateQR = document.querySelector(".patientmedical .qrCode button");
let generateOverlay = document.querySelector(".generat-QR .A-overlay");
let popUpGenerate = document.querySelector(".generat-QR .popup-QR");
let imgQrCode = document.querySelector(".generat-QR .popup-QR img");
let downloadLink = document.querySelector(
  ".generat-QR .popup-QR #downloadLink"
);

btnGenerateQR.addEventListener("click", () => {
  //
  const filePath =
    "https://abdelmagidawad.github.io/Shifaa-web-Application/Profile-pateint/Home/P-MedicalCard/QRCodePageMC/MedicalCard.html";

  // Use the qrious library to generate the QR code
  const qr = new QRious({
    value: filePath,
    size: 170,
  });
  imgQrCode.src = qr.toDataURL("image/png");

  downloadLink.href = imgQrCode.src;
  //
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
