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
  if (!window.shown) {
    alert(
      "This component can used advanced markdown features. To enable them, open the github-on-steroids chrome extension, we'll take care of the rest"
    );
    window.shown = true;
  }

  /** listening for messages from popup */
  chrome.runtime.onMessage.addListener(function (request, sender) {
    targetElement.val(request.message);
  });
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
