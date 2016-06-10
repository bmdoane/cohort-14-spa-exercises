// Sandwich Augmented Bread IIFE
var Sandwich = ((originalSandwich) => {
	// Private variable to store the different meat prices
  var bread = {
  	"Marble_Rye": 1.10,
  	"Pumpernickel": 1.15,
  	"Sourdough": 1.00,
  	"Gluten-Free_Symbiotic_Loaf": 4.00 
  }

  // Augment the original object with another method
  // This is a return of the event handler.  The select/option/value is passed in as an argument
  // This function returns the value that is passed into the Sandwich.getBreadPrice method on the event handler 
  originalSandwich.getBreadPrice = (chosenBread) => {
  	// returning the bread {key:value}
  	// Accessing values in an object requires bracket notation
    return bread[chosenBread];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwich;

})(Sandwich);

// Accessing values in an object requires bracket notation
// function gimmePrice(meat) {
// 	var toppings = {"turkey": 90, "salami": 1.00};
// 	var price = toppings["turkey"];
// 	return price;
// }

// console.log("toppings.turkey", gimmePrice("turkey"));