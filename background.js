function toggleDarkMode(tab) {
  chrome.tabs.executeScript({
    target: { tabId: tab.id },
    code: `
      `
  });
}

chrome.action.onClicked.addListener((tab) => {

  chrome.windows.create({
    url: "popup.html",
    type: "popup",
    width: 400,
    height: 600
  });
});