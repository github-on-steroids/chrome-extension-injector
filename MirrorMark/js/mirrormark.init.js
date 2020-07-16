editor = mirrorMark(document.getElementById("textarea"), {
  autofocus: true,
});
editor.render();

editor.cm.on("change", function () {
  console.log(editor.cm.getValue());
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: editor.cm.getValue() });
  });
});
