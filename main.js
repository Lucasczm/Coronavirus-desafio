var corona = [
  "COVID-19",
  "COVID - 19",
  "covid19",
  "covid",
  "coronavírus",
  "coronavirus",
  "corona vírus",
  "corona virus"
];

var elements = document.getElementsByTagName("*");
function replace() {
  for (var element of elements) {
    for (var node of element.childNodes) {
      if (node.tagName === "SPAN") {
        var replacedText = replaceCorona(node.textContent);
        if (node.textContent !== replacedText) node.textContent = replacedText;
      } else {
        if (node.nodeType === 3) {
          var replacedText = replaceCorona(node.textContent);
          if (node.textContent !== replacedText)
            node.textContent = replacedText;
        }
      }
    }
  }
}

function replaceCorona(text) {
  var replaceText = text;
  for (var x = 0; x < corona.length; x++) {
    var regEx = new RegExp(corona[x], "ig");
    replaceText = replaceText.replace(regEx, "💉");
  }
  return replaceText;
}

function nodeInsertedCallback(event) {
  replace();
}
document.addEventListener("DOMNodeInserted", nodeInsertedCallback);
