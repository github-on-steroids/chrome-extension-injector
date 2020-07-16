/**
 * @description this function generates a launch button for user to click to launch the extended interface
 * @returns void
 * @param void
 */
function generateInjectButton() {
  const button = `<button id="__onSteroid__inject_button" class="btn btn-primary">Steroids Functional${Emojis.pill}</button>`;
  console.log($("body").append(button));
}

/**
 * @description this function generates a modal with target element as currently onfocus element
 * @param targetElement jquery selector returned element
 * @returns void
 */
function generateExtendedInterface(targetElement) {
  const userWants = confirm(
    "We can enhance this input component, do you want us to do it ?"
  );

  if (userWants) {
    console.log("Opening Extended Interface on", targetElement);
    targetElement.val("This came from script");
  }
}

/**
 * @description this function returns the currently active element that can be injected else false
 * @returns jquery selector returned element or boolean false
 * @param void
 */
function getTargetElementToExtend() {
  const currentlyActiveElement = $(":focus");
  if (ValidTargetsNames.includes(currentlyActiveElement.attr("name"))) {
    return currentlyActiveElement;
  } else if (ValidTargetIds.includes(currentlyActiveElement.attr("id"))) {
    return currentlyActiveElement;
  } else {
    return false;
  }
}
