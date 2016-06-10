console.log("Hello Nurse");
// Assign elements of the DOM to variables
var outputEl = document.getElementById("output-target");
var articleEl = document.getElementsByClassName("article-section");
var titleEl = document.getElementById("page-title");
var inputEl = document.getElementById("keypress-input");
var pigText = document.getElementById("guinea-pig");
var colorButton = document.getElementById("add-color");
var hulkButton = document.getElementById("make-large");
var borderButton = document.getElementById("add-border");
var roundButton = document.getElementById("add-rounding");
var allButton = document.getElementsByTagName("button");


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
function whatSection(event) {
	outputEl.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
}
// Use NodeList.item() to addEventListener to node
for (var i = 0; i < articleEl.length; i++) {
	articleEl.item(i).addEventListener("click", whatSection);
}


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
function mouseoverHeader(event) {
	outputEl.innerHTML = `You moved your mouse over the header!`;
}

titleEl.addEventListener("mouseover", mouseoverHeader);
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
function mouseoutHeader(event) {
	outputEl.innerHTML = `You left me!`;
}

titleEl.addEventListener("mouseout", mouseoutHeader);


// When you type characters into the input field, the output element should mirror the text in the input field.
// innerHTML on left and value on right
function mirrorInput(event) {
	outputEl.innerHTML = inputEl.value;
}
// keyup mirrors the input and output
inputEl.addEventListener("keyup", mirrorInput);


// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// function addColor(event) {
// 	pigText.style.color = 'blue';
// }

function addColor(event) {
	pigText.classList.add('addBlue');
}
colorButton.addEventListener("click", addColor);


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// function hulkify(event) {
// 	pigText.style.fontSize = '3em';
// }

function hulkify(event) {
	pigText.classList.add('largeFont');
}
hulkButton.addEventListener("click", hulkify);


// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// function addBorder(event) {
// 	pigText.style.border = '1px solid green';
// }

function addBorder(event) {
	pigText.classList.add('blueBorder');
}
borderButton.addEventListener("click", addBorder);


// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// function roundBorder(event) {
// 	pigText.style.borderRadius = '10px';
// }

function roundBorder(event) {
	pigText.classList.add('roundedBorder');
}

roundButton.addEventListener("click", roundBorder);



// The first section's text should be bold.
articleEl[2].classList.add('goBold');
// The last section's text should be bold and italicized.
articleEl[4].classList.add('italicize', 'goBold');
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
for (var i = 0; i < allButton.length; i++) {
	allButton[i].classList.add('blocked');
}