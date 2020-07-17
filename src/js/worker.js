/**
 * @description this function generates a modal with target element as currently onfocus element
 * @param targetElement jquery selector returned element
 * @returns void
 */
function generateExtendedInterface(targetElement) {
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
  return $(":focus");
}
