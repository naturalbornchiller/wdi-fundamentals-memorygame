let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

function checkForMatch() {
	console.log((cardsInPlay[0] === cardsInPlay[1]) ? 
							'You found a match!' : 
							'Sorry, try again.');
}

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);

	console.log('User flipped ' + cards[cardId]);
	
	checkForMatch();
}

flipCard(0);
flipCard(2);