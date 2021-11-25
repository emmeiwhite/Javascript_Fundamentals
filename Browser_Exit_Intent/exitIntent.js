window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  var confirmationMessage = "o/";

  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage; //Webkit, Safari, Chrome
});
