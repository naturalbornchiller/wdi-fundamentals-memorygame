let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log('User flipped ' + cardsInPlay[0]);
console.log('User flipped ' + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	alert(matchCheck(cardsInPlay[0], cardsInPlay[1]));
}

function matchCheck(a, b) {
	return (a === b) ? 'You found a match!' : 'Sorry, try again.';
}