let savePre = document.querySelector(".write-pre .saveAll");

savePre.addEventListener("click", function () {
  window.location.assign("../home.html");
});

// When Add Medicine to apperance form
let AddMedicine = document.querySelector(".add-mdecine button");
let parentContentAdd = document.querySelector(".popup-add");
let closeButton = document.querySelector(".buttons #cancel");
let saveButton = document.querySelector(".buttons #save");

AddMedicine.addEventListener("click", function () {
  parentContentAdd.parentElement.classList.toggle("active");
});

closeButton.addEventListener("click", function () {
  parentContentAdd.parentElement.classList.toggle("active");
});

// ********************************************************************
// Get references to the form and the medicine section
const form = document.querySelector(".formAdd");
const medicineSection = document.querySelector(".medicine");

// Add an event listener to the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const medicineName = form.elements.medicineName.value;
  const medicineType = form.elements.medicineType.value;
  const dosage = form.elements.Dosage.value;
  const duration = form.elements.Duration.value;
  const frequency = form.elements.Frequency.value;
  const scheduleLabel = form.elements.ScheduleLabel.value;

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

  // Create the time p element inside cont1
  const pTime = document.createElement("p");
  pTime.classList.add("time");
  pTime.textContent = scheduleLabel;
  cont1.appendChild(pTime);

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

  // Append the new box to the medicine section
  medicineSection.appendChild(newBox);

  // Reset the form
  form.reset();
});
