console.log("JS file is connected to HTML! Woo!")

//Cards that will be used in the game
var cards = ['queen', 'queen', 'king', 'king']

var cardsInPlay = [];

/*if (cards[0] === cards[1]) {
	alert('You found a match');
}
else {
	alert('Sorry, try again')	
};*/

var board = document.getElementById('game-board');
// function will create board
function createBoard() {

for(var i=0; i<cards.length; i++){
	
	var newCard = document.createElement('div');
	
	newCard.className = 'card';
	board.appendChild(newCard);
		
	}
};

creatBoard();



/*var createBoard = function(numCards) {
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