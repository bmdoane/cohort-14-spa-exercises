console.log("Hello Nurse");

var comedians = [
	{
	  title: "Comedian",
	  name: "Richard Pryor",
	  bio: "Pastrami ham shankle, sirloin meatball drumstick ground round. Sirloin sausage pastrami turkey pork chop picanha andouille, flank tongue kevin filet mignon. Pig hamburger swine, capicola tri-tip leberkas ball tip shankle tenderloin porchetta biltong sausage. Strip steak flank spare ribs, sirloin shankle salami hamburger.",
	  image: "https://c1.staticflickr.com/8/7271/26828456984_bbacff4b56_m.jpg",
	  lifespan: {
	    birth: 1940,
	    death: 2005
	  }
	},
		{
	  title: "Comedian",
	  name: "George Carlin",
	  bio: "Pastrami ham shankle, sirloin meatball drumstick ground round. Sirloin sausage pastrami turkey pork chop picanha andouille, flank tongue kevin filet mignon. Pig hamburger swine, capicola tri-tip leberkas ball tip shankle tenderloin porchetta biltong sausage. Strip steak flank spare ribs, sirloin shankle salami hamburger.",
	  image: "https://c2.staticflickr.com/8/7319/26830164393_a75a400565_m.jpg",
	  lifespan: {
	    birth: 1937,
	    death: 2008
	  }
	},
		{
	  title: "Comedian",
	  name: "Louis C.K.",
	  bio: "Pastrami ham shankle, sirloin meatball drumstick ground round. Sirloin sausage pastrami turkey pork chop picanha andouille, flank tongue kevin filet mignon. Pig hamburger swine, capicola tri-tip leberkas ball tip shankle tenderloin porchetta biltong sausage. Strip steak flank spare ribs, sirloin shankle salami hamburger.",
	  image: "https://c2.staticflickr.com/8/7436/27365613081_588b244aa3_m.jpg",
	  lifespan: {
	    birth: 1967,
	    death: "TBD"
	  }
	},
		{
	  title: "Comedian",
	  name: "Sarah Silverman",
	  bio: "Pastrami ham shankle, sirloin meatball drumstick ground round. Sirloin sausage pastrami turkey pork chop picanha andouille, flank tongue kevin filet mignon. Pig hamburger swine, capicola tri-tip leberkas ball tip shankle tenderloin porchetta biltong sausage. Strip steak flank spare ribs, sirloin shankle salami hamburger.",
	  image: "https://c2.staticflickr.com/8/7261/27365613121_4f67dc0571_m.jpg",
	  lifespan: {
	    birth: 1970,
	    death: "TBD"
	  }
	},
		{
	  title: "Comedian",
	  name: "Jerry Seinfeld",
	  bio: "Pastrami ham shankle, sirloin meatball drumstick ground round. Sirloin sausage pastrami turkey pork chop picanha andouille, flank tongue kevin filet mignon. Pig hamburger swine, capicola tri-tip leberkas ball tip shankle tenderloin porchetta biltong sausage. Strip steak flank spare ribs, sirloin shankle salami hamburger.",
	  image: "https://c4.staticflickr.com/8/7428/27437564835_6711cd5e0d_m.jpg",
	  lifespan: {
	    birth: 1954,
	    death: "TBD"
	  }
	},
		{
	  title: "Comedian",
	  name: "Bill Burr",
	  bio: "Pastrami ham shankle, sirloin meatball drumstick ground round. Sirloin sausage pastrami turkey pork chop picanha andouille, flank tongue kevin filet mignon. Pig hamburger swine, capicola tri-tip leberkas ball tip shankle tenderloin porchetta biltong sausage. Strip steak flank spare ribs, sirloin shankle salami hamburger.",
	  image: "https://c7.staticflickr.com/8/7663/27403463086_8d84ffefc9_m.jpg",
	  lifespan: {
	    birth: 1968,
	    death: "TBD"
	  }
	}

];


var userInput = document.getElementById(`userInput`);
var comedianEl = document.getElementById(`card-container`);
var card = document.getElementsByClassName(`cardBorder`);
var counter = 1;
var comedianString = "";
var activeCard;
var bioId;
var bioText;

// Function to define the card elements for use in several differnt functions
function comedianCards() {
	var cardEl = document.getElementsByClassName(`cardBorder`);
	return cardEl
}

function buildDom(comedianArray) {
	for (var i = 0; i < comedianArray.length; i++) {
		if (i % 3 === 0) {
			comedianString += `<div class='row'>`;
		}
		// Code works.  How do I use counters to get the innerHTML to work
		comedianString += `
			<div id='card--${counter}' class='col-md-4 cardBorder'>
				<h3 class='title'>${comedianArray[i].title}</h3>
				<p class='name'>${comedianArray[i].name}</p>
				<div id='bio-wrapper'>
					<span class='biography editable'>${comedianArray[i].bio}</span>
				</div>
				<img class='image' src='${comedianArray[i].image}'>
				<p class='birth'>Born: ${comedianArray[i].lifespan.birth}</p>
				<p class='death'>Died: ${comedianArray[i].lifespan.death}</p>
			</div>`;
		if ((i + 1) % 3 === 0) { 
			comedianString += `</div>`;
		}		
		counter++;
	}

	comedianEl.innerHTML = comedianString;
	addBackgroundColor();
	activateEventListeners();

}
buildDom(comedians);

// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Identify the card elements by their class name and assign them to a variable
function addBackgroundColor() {
 	for (var i = 0; i < card.length; i++) {
 		if ([i] % 2 === 0) {
 			card[i].classList.add(`lightblueBack`);
 		} else {
 			card[i].classList.add(`yellowBack`);
 		}
 	}
}

// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
function activateEventListeners() {
	var comCards = comedianCards();
	for (var i = 0; i < comCards.length; i++) {
		comCards[i].addEventListener('click', function(event) {
			addBorder();
			userInput.focus();
			userInput.value = "";
			// Set currentTarget variable to use below to grab child element
			activeCard = event.currentTarget;
			console.log(`activeCard`, activeCard);
		});
	}

// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
	userInput.addEventListener(`keyup`, function() {
		var inputText = userInput.value;
		bioText = activeCard.children[2];
		bioText.innerHTML = inputText;
		if (event.keyCode === 13) {
			userInput.value = "";
			userInput.blur();
		}
	});
} 

function addBorder() {
	var comCards = comedianCards();
	for (var i = 0; i < comCards.length; i++) {
		// Remove the class on all before adding to target for isolated class effect
		comCards[i].classList.remove(`border`);
	};
	event.currentTarget.classList.add(`border`);
}

