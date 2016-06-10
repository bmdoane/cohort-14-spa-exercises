console.log("Hello Nurse");
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
var elTwo = document.getElementById("planetsExerciseTwo");
var elThree = document.getElementById("planetsExerciseThree");
var elFour = document.getElementById("planetsExerciseFour");

// Create callback function to pass into the forEach method
function addToDom(planet) {
	el.innerHTML += planet + " ";
}
// call forEach method with callback
planets.forEach(addToDom);




// Use the map method to create a new array where the first letter of each planet is capitalized
// Create callback function to pass into the map method
// function capFirstLetter(planet) {
// 	return planet.charAt(0).toUpperCase() + planet.slice(1);
// }

// var capPlanets = planets.map(capFirstLetter); //.map() makes capPlanets array
// elTwo.innerHTML = capPlanets.join(" ");  //.join(" ") to space innerHTML


// With anonymous function
var capPlanets = planets.map(function(planet) {
	return planet.charAt(0).toUpperCase() + planet.slice(1);	
});

elTwo.innerHTML = capPlanets.join(" ");




// Use the filter method to create a new array that contains planets with the letter 'e'
// Create callback function to pass into the filter method
// function findPlanetsWithE(planet) {
// 	return planet.indexOf("e") != -1;
// }

// var ePlanets = planets.filter(findPlanetsWithE);
// elThree.innerHTML = ePlanets.join(" ");


// With anonymous function
var ePlanets = planets.filter(function(planet) {
	return planet.indexOf("e") != -1;
});

elThree.innerHTML = ePlanets.join(" ");




// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
// With anonymous function
var sentence = words.reduce(function(previous, current) {
	// return previous + " " + current;
	return `${previous} ${current}` // ES6
});

elFour.innerHTML = `${sentence}.`; // Add period at end of sentence