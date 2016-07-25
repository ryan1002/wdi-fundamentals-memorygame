console.log("JS file is connected to HTML! Woo!")

//Cards that will be used in the game
var cards = ['queen', 'queen', 'king', 'king']

var cardsInPlay = [];

var cardOne = "queen";


/*if (cards[0] === cards[1]) {
	alert('You found a match');
}
else {
	alert('Sorry, try again')	
};*/
	
var gameBoard = document.getElementById('game-board');

var createBoard = function(numCards) {
	for(var i=1; i<= numCards; i++) {
	var newCard = document.getElementById('div');
	newCard.className = "card";
	gameBoard.appendChild(newCard);
	}
};

createBoard(4);


/*

 Assuming your memory card game consists of four cards, create a for loop that makes an HTML element for each card. Each HTML element should be a div. Each element should also have the class card (this will help when you add CSS).

*/