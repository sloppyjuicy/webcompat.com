/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Allows the user to enter description of the problem */

import { showContainer } from "../ui-utils.js";
import notify from "../notify.js";

const container = $(".step-container.step8");
const nextStepButton = container.find(".next-step.step-8");

//@todo remove this
nextStepButton.removeClass("disabled");

const handleNext = event => {
  event.preventDefault();
  notify.publish("showStep", { id: "screenshot" });
};

nextStepButton.on("click", handleNext);

export default {
  show() {
    showContainer(container);
  }
};