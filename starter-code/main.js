var cards = ['queen', 'queen', 'king', 'king'];

// represents the cards in play
var cardsInPlay = [];

// find the board and set it to a variable
var board = document.getElementById('game-board');
// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {
    // create a div element which will be used as a card
    var newCardElement = document.createElement('div');
    // add a class to the card element which will help link styling
    newCardElement.className = 'card';
		// this will set the card's 'data-card' to be the element of the array
    // data- attributes are meant to store data about an element that is not tied to a style.
    // i.e. "king"
    newCardElement.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
    newCardElement.addEventListener('click', isTwoCards);

    // append the card to the board
    board.appendChild(newCardElement);
    board.appendChild(newCardElement);
  }

};

function isTwoCards() {
  // add card to array of cards being viewed
  
  cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  
  if (cardsInPlay.length === 2) {
    
    isMatch(cardsInPlay);
    
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();