chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      console.log("Loaded Inject Script");
      generateInjectButton();
    }
  }, 10);
});
