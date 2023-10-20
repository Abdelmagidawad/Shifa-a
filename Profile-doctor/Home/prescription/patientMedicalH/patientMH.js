// update information Patient
let btnUpdate = document.querySelector(".content .btn>button");
let popUpUpdateCont = document.querySelector(".popup-update");
let closeButton = document.querySelector(".buttons #cancel");
let saveButton = document.querySelector(".buttons #save");
let overlay = document.querySelector(".update-info .A-overlay");

// to Show popUp
btnUpdate.addEventListener("click", () => {
  popUpUpdateCont.parentElement.classList.toggle("active");
});
closeButton.addEventListener("click", () => {
  popUpUpdateCont.parentElement.classList.toggle("active");
});
overlay.addEventListener("click", () => closeButton.click());

// Update data
let bloodType = document.querySelector(".details .box:first-child span");
let Height = document.querySelector(".details .box:nth-child(3) span");
let Weight = document.querySelector(".details .box:last-child span");

let inputSelBlood = document.querySelector("[name='bloodType']");
let inputWeight = document.querySelector("[name='weight']");
let inputHeight = document.querySelector("[name='height']");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputSelBlood.value !== "" ||
    inputWeight.value !== "" ||
    inputHeight.value !== ""
  ) {
    if (inputSelBlood.value !== "") bloodType.innerHTML = inputSelBlood.value;
    if (inputHeight.value !== "")
      Height.innerHTML = `${parseInt(inputHeight.value)} CM`;
    if (inputWeight.value !== "")
      Weight.innerHTML = `${parseInt(inputWeight.value)} KG`;

    //
    document.querySelector(".formUp").reset();
    closeButton.click();
  } else {
    alert("Please Add Data");
  }
});

// Add chronic Disease
let btnAdd = document.querySelector(".sec-chronic .sec-head button");
let popUpAddCont = document.querySelector(".add-Chronic .popup-Add");
let addOverlay = document.querySelector(".add-Chronic .a-overlay");
let addSaveBtn = document.querySelector(".FormAdd #save");
let addCancelBtn = document.querySelector(".FormAdd #cancel");

// to Show Add PopUp
btnAdd.addEventListener("click", () => {
  popUpAddCont.parentElement.classList.toggle("active");
});
addCancelBtn.addEventListener("click", () => {
  popUpAddCont.parentElement.classList.toggle("active");
});
addOverlay.addEventListener("click", () => addCancelBtn.click());

let chronicContainer = document.querySelector(".sec-chronic .chronic-content");
let inputChronic = document.querySelector("[name='Disease']");

addSaveBtn.onclick = function (e) {
  e.preventDefault();
  if (inputChronic.value !== "") {
    let divDise = document.createElement("div");
    let pDise = document.createElement("p");
    let iconeDelet = document.createElement("i");
    divDise.classList.add("disease");
    pDise.append(inputChronic.value);
    divDise.append(pDise);
    iconeDelet.classList.add("fa-solid", "fa-trash-can");
    iconeDelet.addEventListener("click", () => {
      iconeDelet.parentElement.remove();
    });
    divDise.append(iconeDelet);
    chronicContainer.append(divDise);
    // reset input value
    inputChronic.value = "";
    addCancelBtn.click();
  } else {
    // ****//
    alert("Please Add Chronic Disease");
  }
};
