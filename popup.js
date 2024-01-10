document.addEventListener('DOMContentLoaded', function() {
  var wordSizeInput = document.getElementById('wordSize');
  var letterSpacingInput = document.getElementById('letterSpacing');
  var textColorInput = document.getElementById('textColor');
  var fontFamilyInput = document.getElementById('fontFamily');

  wordSizeInput.addEventListener('input', function() {
    sendMessageToContentScript({ action: 'changeWordSize', value: wordSizeInput.value });
  });

  letterSpacingInput.addEventListener('input', function() {
    sendMessageToContentScript({ action: 'changeLetterSpacing', value: letterSpacingInput.value });
  });

  textColorInput.addEventListener('input', function() {
    sendMessageToContentScript({ action: 'changeTextColor', value: textColorInput.value });
  });

  fontFamilyInput.addEventListener('change', function() {
    sendMessageToContentScript({ action: 'changeFontFamily', value: fontFamilyInput.value });
  });

  function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
});