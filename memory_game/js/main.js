// stores cards available for memory game
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
// stores flipped cards
let cardsInPlay = [];

/*
if two cards have been flipped
checks for match, alerts to success/failure
*/
function checkForMatch () {
	alert((cardsInPlay[0] === cardsInPlay[1]) ? 
		'You found a match!' : 
		'Sorry, try again.');
}

/*
retrieves the card id from the element that was clicked
adds the card to cardsInPlay
changes the imagesrc of the element
calls checkForMatch()
*/
function flipCard () {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

/*
appends 4 imgs with sequential IDs
to the div with id='game-board'
each img listens for click, which calls flipCard()
*/
function createBoard () {
	for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

// instantiate gameboard
createBoard();

// noticed error where you can click the card twice to win
// implement reset button
//implement randomization