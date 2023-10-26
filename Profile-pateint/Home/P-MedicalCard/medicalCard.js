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
