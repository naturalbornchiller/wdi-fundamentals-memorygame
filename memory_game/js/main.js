let cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}

];
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		alert((cardsInPlay[0] === cardsInPlay[1]) ? 
			'You found a match!' : 
			'Sorry, try again.');
	}
}

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log('User flipped ' + cards[cardId].rank + ' of ' + cards[cardId].suit);

	checkForMatch();
}

flipCard(0);
flipCard(2);