// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.

// Create a variable for each DOM element
var inputEl = document.getElementById("userInput");
var buttonEl = document.getElementById("alterInput");
var outputEl = document.getElementById("output");
var testString = "";

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.
function checkInput() {
	var alphaExp = /^[a-zA-Z]+$/;
    if(inputEl.value.match(alphaExp))
    {
    	testString = inputEl.value;
      addToDom(testString);
    }
    else{
      alert(`Please enter letters only!`);
      inputEl.value = "";
      inputEl.focus();
    }
}

function enterInput(event) {
	var key = event.keyCode;
	if (key === 13) {
		checkInput();
	} 
}

// With a string, you need to convert it to an array before you can use array methods, thus the split() method.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal(string) {
	
	return string.split("").reverse().join("");
}

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits(string) {
	console.log("click");
 	return string.split("").sort().join("");
}

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(string) {
 if (string === string.split("").reverse().join("")) {
 	return `Your string "${string}" is a palindrome!`;
 } else {
 	return `Your string "${string}" unfortunately, is not a palindrome`;
 }
}

function addToDom(string){
	outputEl.innerHTML = `
		<div>${reversal(string)}</div>
		<div>${alphabits(string)}</div>
		<div>${palindrome(string)}</div>`;
}

// Assign event listener to enter key and submit button
inputEl.addEventListener("keypress", enterInput);
buttonEl.addEventListener("click", checkInput);
