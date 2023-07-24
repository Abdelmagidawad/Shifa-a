// links appointments
let upcomingAppoint = document.querySelector(".links-appointments .up-appoint");
let completedAppoint = document.querySelector(
  ".links-appointments .com-appoint"
);

upcomingAppoint.addEventListener("click", () => {
  window.location.assign("../Upcomming/upcom.html");
});

completedAppoint.addEventListener("click", () => {
  window.location.assign("../Commpleted/commplet.html");
});

// list doctor Canceled
