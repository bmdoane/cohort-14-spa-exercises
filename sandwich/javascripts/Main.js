// Need to get topping price.
// Add prices together.
// How can I tighten up my global variables??
// Bug of getting undefined while clicking under veggie options
console.log("Hello Nurse");

// If this is the DOM handler you will want to link it last, so everything is defined
// Variable to hold the final price. Default to 0.  Giving it a number context.
var finalSandwichPrice = 0;
// Variable to hold topping that the user selects
var selectedTopping;
// Variable to hold selected sandwich parts, again giving value a number context.
var selectedBread = 0;
var selectedMeat = 0;
var selectedCondiment = 0;
var selectedCheese = 0;
var selectedVeggie = 0;
// An array to collect selectedTopping prices
var multipleOption = [];

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var partsEl = document.getElementById("sandwich-parts");
var outputEl = document.getElementById("sandwich-price");

// Log the IIFE object to see methods 
console.log("Sandwich", Sandwich);

// This function adds selections to the DOM
function sandwichParts(selectedParts) {
	partsEl.innerHTML += `<div>${selectedParts}</div>`;
}

function determinePrice(selectedParts) {
  multipleOption.push(selectedParts);
  console.log("multipleOption", multipleOption);
  var all = multipleOption.reduce( function (previous, current) {
    return previous + current;
  });
  all = all.toFixed(2);
  outputEl.innerHTML = `<div>Order amount: $${all}</div>`;
}

// Reset select menu so a topping can be doubled by clicking twice in a row
function resetSelectElement(selectOption) {
    selectOption.value = false;
}

// A <select> element broadcasts a change event, so you listen for it and get the value of the topping from your augmented IIFE
// Value of the select option (HTML) must match the key in your object, to get value/pair (IIFE)
breadChooser.addEventListener("change", function(event) {
	console.log("event");
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("click", selectedTopping);
  sandwichParts(selectedTopping);
  // Determine the price of the topping chosen
  // the getBreadPrice (and all getters and setters in the IIFE) is available on the sandwich object
  selectedBread = Sandwich.getBreadPrice(selectedTopping);
  determinePrice(selectedBread);
  resetSelectElement(breadChooser);
});

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  sandwichParts(selectedTopping);
  selectedMeat = Sandwich.getMeatPrice(selectedTopping);
  determinePrice(selectedMeat);
  resetSelectElement(meatChooser);
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  sandwichParts(selectedTopping);
  selectedCheese = Sandwich.getCheesePrice(selectedTopping);
  determinePrice(selectedCheese);
  resetSelectElement(cheeseChooser);
});

condimentChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  sandwichParts(selectedTopping);
  selectedCondiment = Sandwich.getCondimentPrice(selectedTopping);
  determinePrice(selectedCondiment);
  resetSelectElement(condimentChooser);
});

veggieChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  sandwichParts(selectedTopping);
  selectedVeggie = Sandwich.getVeggiePrice(selectedTopping);
  determinePrice(selectedVeggie);
  resetSelectElement(veggieChooser);
});