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


var userInput = document.getElementById("userInput");
var comedianEl = document.getElementById("card-container");
var card = document.getElementsByClassName('cardBorder');
var counter = 1;
var comedianString = "";

function comedianCards() {
	var cardEl = document.getElementsByClassName('cardBorder');
	return cardEl
}

function buildDom(comedianArray) {
	for (var i = 0; i < comedianArray.length; i++) {
		if (i % 3 === 0) {
			comedianString += `<div class='row'>`;
		}
		comedianString += `
			<div id='card--${counter}' class='col-md-4 cardBorder'>
				<h3 class='title editable'>${comedianArray[i].title}</h3>
				<p class='name editable'>${comedianArray[i].name}</p>
				<p class='bio editable'>${comedianArray[i].bio}</p>
				<img class='image' src='${comedianArray[i].image}'>
				<p class='birth editable'>Born: ${comedianArray[i].lifespan.birth}</p>
				<p class='death editable'>Died: ${comedianArray[i].lifespan.death}</p>
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
 			card[i].classList.add('lightblueBack');
 		} else {
 			card[i].classList.add('yellowBack');
 		}
 	}
}



// Still have to figure out all of this functionality
// Look at target methods - ie. closest


// When you click on one of the person elements, a dotted border should appear around it.
function activateEventListeners(event) {
	var comCards = comedianCards();
	for (var i = 0; i < comCards.length; i++) {
		comCards[i].addEventListener('click', function(event) {
			var card = event.currentTarget;
			console.log('event.target', event.target);
			addBorder();
		});
	}
	userInput.addEventListener("keyup", function(event) {
		var inputText = event.target.value;
		var newText = document.getElementsByClassName("editable");
		newText[0].innerHTML = inputText;
		if (event.keyCode === 13) {
			// can't get userInput to reset, lose focus and not be bound to mirror element.  Think this may be just for bio.  Refactor.
			userInput.value = "";
			userInput.blur();
			// how to reset border here??
		}	
	});
} 
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
function addBorder() {
	event.target.classList.add('border');
	userInput.focus();
}


