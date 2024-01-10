chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'changeWordSize') {
    var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    elements.forEach(function(element) {
      element.style.fontSize = message.value + 'px';
    });
  } else if (message.action === 'changeLetterSpacing') {
    var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    elements.forEach(function(element) {
      element.style.letterSpacing = message.value + 'px';
    });
  } else if (message.action === 'changeTextColor') {
    var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    elements.forEach(function(element) {
      element.style.color = message.value;
    });
  } else if (message.action === 'changeFontFamily') {
    var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    elements.forEach(function(element) {
      element.style.fontFamily = message.value;
    });
  }
});