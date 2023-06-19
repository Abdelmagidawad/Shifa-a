import { NetworkHelper } from "../../Network/remoteHelper.js";

import { getCookieValue } from "../../Local/localHelper.js";

console.log(getCookieValue("userId"));

let boxPatient = document.querySelectorAll(".list-appoint .box");

boxPatient.forEach(function (box) {
  box.addEventListener("click", function () {
    window.location.assign("../Home/prescription/pres.html");
  });
});
