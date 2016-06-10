// Sandwich Augmented Meat IIFE
// Refer to Bread.js for comments
var Sandwich = ((originalSandwich) => {
	// Private variable to store the different meat prices
  var meat = {
  	"Turkey": 1.10,
  	"Olive_Loaf": .85,
  	"Capicola": 1.25,
  	"BlackForest_Ham": 1.20 
  };


  // Augment the original object with another method
  originalSandwich.getMeatPrice = (chosenMeat) => {
    return meat[chosenMeat];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwich;

})(Sandwich);