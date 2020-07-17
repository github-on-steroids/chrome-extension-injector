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
