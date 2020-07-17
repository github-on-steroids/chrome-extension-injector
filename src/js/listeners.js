/**
 * @for __onSteroid__inject_button
 */
$(document.body).on("click", "#__onSteroid__inject_button", function () {
  console.log("This button ensures that extension loaded");
});

/** to actively watch all clicked elements and identify possible power-ups */
$(document).on("click", "body", function () {
  const validExtendableElement = getTargetElementToExtend();
  if (validExtendableElement !== false) {
    generateExtendedInterface(validExtendableElement);
  }
});

chrome.runtime.onMessage.addListener(function (request, sender) {
  console.log(
    "Contentscript has received a message from from background script: '" +
      request.message +
      "'"
  );
});
