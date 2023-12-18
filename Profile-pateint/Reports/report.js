let btnsDespense = document.querySelectorAll(".box .despense");
let generateOverlay = document.querySelector(".qrcode-desp .q-overlay");
let popUpQRcode = document.querySelector(".qrcode-desp .popup-qrcode");
let btndone = document.querySelector(".buttons #done");
let btncancel = document.querySelector(".buttons #cancel");

btnsDespense.forEach((btn) => {
  btn.addEventListener("click", () => {
    popUpQRcode.parentElement.classList.toggle("active");
  });
});

btncancel.addEventListener("click", () => {
  popUpQRcode.parentElement.classList.toggle("active");
});

generateOverlay.addEventListener("click", () => {
  btncancel.click();
});

// test done btn
btndone.addEventListener("click", () => {
  btncancel.click();
});
