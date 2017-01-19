// Back end section
var integerToRomanNumeral =
function(integerInput) {
  if (integerInput >= 4000) {
    return;
  }
  if (integerInput === 0) {
      return "";
  }
};


$(document).ready(function() {

  // Front end section
  $("form").submit(function(event) {
    event.preventDefault();

    // Get user Input in a variable and convert to Integer
    var userInput = parseInt( $("#inputNumber").val() );

    // Generate output based upon Input and store in a variable
    var romanNumeralOutput = integerToRomanNumeral(userInput);

    // Make sure we give some output even if there was none or it was undefined
    if(!romanNumeralOutput) {
      romanNumeralOutput = "No value returned"
    }

    // Put output into our page
    $("#translation").text(romanNumeralOutput);

    // Fade out out and in to see change
    $("#outputSection").fadeOut(100).fadeIn(100);
  });

}); // End Document Ready
