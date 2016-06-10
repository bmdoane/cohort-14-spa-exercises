// Sandwich Augmented Condiments IIFE
// Refer to Bread.js for comments
var Sandwich = ((originalSandwich) => {
	// Private variable to store the different meat prices
  var condiment = {
  	"Pickles": .50,
  	"Meat_Hotsauce": .75,
  	"Oil_and_Vinegar": .40,
  	"Salt_and_Pepper": .25 
  };


  // Augment the original object with another method
  originalSandwich.getCondimentPrice = (chosenCondiment) => {
    return condiment[chosenCondiment];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwich;

})(Sandwich);