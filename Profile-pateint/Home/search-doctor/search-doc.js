import { NetworkHelper } from "../../../Network/remoteHelper.js";

import { getCookieValue } from "../../../Local/localHelper.js";

const networkHelper = new NetworkHelper();

const doctorId = getCookieValue("userId");

// networkHelper
//   .fetchAllDoctorsDataFromDatabase()
//   .then((dataList) => {
//     // Use the data list here
//     console.log(dataList);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error(error);
//   });

networkHelper.fetch3DataFromDatabase();

networkHelper.test();

console.log("llllllll");
