let logBtnHeader = document.querySelector(".tol-links li button");
let parentPopup = document.querySelector(".popup-content");
let cancelBtn = document.querySelector(".popup #cancel");
let lotoutBtn = document.querySelector(".popup #logout");

function openPopup() {
  document.getElementById("POP").classList.toggle("active");
}
cancelBtn.addEventListener("click", function () {
  //   parentPopup.parentElement.remove();
  // parentPopup.parentElement.style.display = "none";
  parentPopup.parentElement.classList.toggle("active");
});

console.log(lotoutBtn);
