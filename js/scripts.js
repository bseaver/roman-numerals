// Back end section
var integerToRomanNumeral =
function(integerInput) {
  var duplicateSymbol = function(count, symbol) {
    result = "";
    for (var i = 0; i < count; i++) {
      result += symbol;
    }
    return result;
  }

  var result;

  if (integerInput >= 4000 || integerInput <= 0) {
    result = undefined;
  }

  var factors = [[500, "D"], [50, "L"], [5, "V"]];
  var factorCount;
  var factorIndex;
  for (factorIndex = 0; factorIndex < factors.length; factorIndex += 1) {
    if (integerInput % factors[factorIndex][0] === 0) {
      factorCount = integerInput / factors[factorIndex][0];

      if (factorCount === 1) {
        result = duplicateSymbol(factorCount, factors[factorIndex][1]);
      }
      break;
    }
  };

  factors = [[1000, "M"], [100, "C"], [10, "X"], [1, "I"]];
  for (factorIndex = 0; factorIndex < factors.length; factorIndex += 1) {
    if (integerInput % factors[factorIndex][0] === 0) {
      factorCount = integerInput / factors[factorIndex][0];

      if (factorCount >= 1 && factorCount <= 3) {
        result = duplicateSymbol(factorCount, factors[factorIndex][1]);
      }
      break;
    }
  };

  return result;
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
