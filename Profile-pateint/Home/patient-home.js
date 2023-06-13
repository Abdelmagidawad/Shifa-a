import { NetworkHelper } from "../../Network/remoteHelper.js";

import { getCookieValue } from "../../Local/localHelper.js";

console.log(getCookieValue("userId"));

const networkHelper = new NetworkHelper();
