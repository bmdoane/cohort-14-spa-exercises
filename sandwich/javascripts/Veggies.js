// Sandwich Augmented Veggies IIFE
// Refer to Bread.js for comments
var Sandwich = ((originalSandwich) => {
	// Private variable to store the different meat prices
  var veggie = {
  	"Lettuce": .75,
  	"Ghost_Peppers": .60,
  	"Tomatoes": .90,
  	"Onions": .80 
  };


  // Augment the original object with another method
  originalSandwich.getVeggiePrice = (chosenVeggie) => {
    return veggie[chosenVeggie];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwich;

})(Sandwich);