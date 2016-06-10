// Sandwich Augmented Cheese IIFE
// Refer to Bread.js for comments
var Sandwich = ((originalSandwich) => {
	// Private variable to store the different meat prices
  var cheese = {
  	"American": .75,
  	"Cheddar": .85,
  	"Havarti": .90,
  	"Swiss": .80 
  };


  // Augment the original object with another method
  originalSandwich.getCheesePrice = (chosenCheese) => {
    return cheese[chosenCheese];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwich;

})(Sandwich);