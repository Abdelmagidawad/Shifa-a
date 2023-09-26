let savePre = document.querySelector(".write-pre .saveAll");

savePre.addEventListener("click", function () {
  window.location.assign("../home.html");
});

// When Add Medicine to apperance form
let AddMedicine = document.querySelector(".add-mdecine button");
let parentContentAdd = document.querySelector(".popup-add");
let closeButton = document.querySelector(".buttons #cancel");
let saveButton = document.querySelector(".buttons #save");
let overlay = document.querySelector(".add-medicine .A-overlay");

function popUp() {
  parentContentAdd.parentElement.classList.toggle("active");
}
AddMedicine.addEventListener("click", popUp);

closeButton.addEventListener("click", popUp);

overlay.addEventListener("click", () => {
  closeButton.click();
});

// ********************************************************************
// Get references to the form and the medicine section
const form = document.querySelector(".formAdd");
const medicineSection = document.querySelector(".medicine");

// Add Schedule Label
let inputSchedule = document.querySelector("input[name='ScheduleLabel']");
let addScheduleBtn = document.querySelector(".btn button");
let containerSchedule = document.querySelector(".addShedule");

addScheduleBtn.onclick = function () {
  if (inputSchedule.value !== "") {
    let divT = document.createElement("div");
    let pTime = document.createElement("p");
    let iconeDelet = document.createElement("i");
    divT.classList.add("T");
    pTime.classList.add("time");
    pTime.append(inputSchedule.value);
    divT.append(pTime);
    iconeDelet.classList.add("fa-solid", "fa-trash-can");
    iconeDelet.addEventListener("click", () => {
      iconeDelet.parentElement.remove();
    });
    divT.append(iconeDelet);
    containerSchedule.append(divT);
    // reset input value
    inputSchedule.value = "";
  } else {
    // ****//
    alert("Please Add Schedule before");
  }
};

// Add an event listener to the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const medicineName = form.elements.medicineName.value;
  const medicineType = form.elements.medicineType.value;
  const dosage = form.elements.Dosage.value;
  const duration = form.elements.Duration.value;
  const frequency = form.elements.Frequency.value;

  if (
    medicineName !== "" &&
    medicineType !== "" &&
    dosage !== "" &&
    duration !== "" &&
    frequency !== "" &&
    containerSchedule.innerHTML !== ""
  ) {
    // Create a new box element
    const newBox = document.createElement("div");
    newBox.classList.add("box");

    // Create the cont1 element
    const cont1 = document.createElement("div");
    cont1.classList.add("cont1");
    newBox.appendChild(cont1);

    // Create the h3 element and set its text content to medicineName
    const h3 = document.createElement("h3");
    h3.textContent = medicineName;
    cont1.appendChild(h3);

    // Create the first p element inside cont1
    const p1 = document.createElement("p");
    p1.textContent = "Dose: ";
    cont1.appendChild(p1);

    // Create the span element inside p1 and set its text content to dosage
    const span1 = document.createElement("span");
    span1.textContent = dosage + " mg";
    p1.appendChild(span1);

    // Create the cont2 element
    const cont2 = document.createElement("div");
    cont2.classList.add("cont2");
    newBox.appendChild(cont2);

    // Create the p elements inside cont2
    const pType = document.createElement("p");
    pType.textContent = "Type: ";
    cont2.appendChild(pType);

    const spanType = document.createElement("span");
    spanType.textContent = medicineType;
    pType.appendChild(spanType);

    const pFreq = document.createElement("p");
    pFreq.textContent = "Frequency: ";
    cont2.appendChild(pFreq);

    const spanFreq = document.createElement("span");
    spanFreq.textContent = frequency;
    pFreq.appendChild(spanFreq);

    const pDur = document.createElement("p");
    pDur.textContent = "Duration: ";
    cont2.appendChild(pDur);

    const spanDur = document.createElement("span");
    spanDur.textContent = duration + " Days";
    pDur.appendChild(spanDur);

    // Create the cont3 element
    const cont3 = document.createElement("div");
    cont3.classList.add("cont3");
    newBox.appendChild(cont3);

    let allPTime = document.querySelectorAll(".addShedule .time");
    allPTime.forEach(function (elP) {
      elP.parentElement.style.display = "none";
      cont3.append(elP);
    });

    // Append the new box to the medicine section
    medicineSection.appendChild(newBox);
  } else {
    // **//
    alert("Please Fill All Fields");
  }
  // Reset the form
  form.reset();
});
