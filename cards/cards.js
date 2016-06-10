// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM. 

var inputEl = document.getElementById("userInput");
var createBtn = document.getElementById("createCard");
var containerEl = document.getElementById("container");
// Use counter since you are making only one card at a time
var counter = 1;

function createCard() {
	// Create a new div element to store the card, that can be removed later from the DOM
  var newDiv = document.createElement("div");
  console.log("newDiv", newDiv);
  // add unique id to button, to differentiate the event listeners assigned to each card 
  var newCard = `
		<div id='card' class='cardStyle'>
			<p>${inputEl.value}</p>
			<button id='deleteBtn-${counter}' class='deleteBtn'>Delete</button>
		</div>`;
  newDiv.innerHTML = newCard; 
  console.log("newDiv", newDiv);
	containerEl.appendChild(newDiv);
	console.log("containerEl", containerEl);

	// Add the event listener in this function because the element to attach to is just being created
	// Assign the event listener to the button
	// currentTarget = button, parentNode = card, parentNode = div(newDiv)
	document.getElementById(`deleteBtn-${counter}`).addEventListener('click', function(event) {
		console.log("event.currentTarget", event.currentTarget);
	  containerEl.removeChild(event.currentTarget.parentNode.parentNode); // This is fragile.
	  // Best practice to remove is targeting the id of the card

	});
  counter++;
}

function addCardToDom() {
	createCard();
	inputEl.value = ``;
	inputEl.focus();
}

createBtn.addEventListener("click", addCardToDom);