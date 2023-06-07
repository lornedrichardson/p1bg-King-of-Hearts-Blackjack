/** @format */

const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const values = [
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'J',
	'Q',
	'K',
	'A',
];
let deck = [];
let playedCards = [];
let playerHand = [];
let dealerHand = [];
let playerHandValue = 0;
let dealerHandValue = 0;
let winnings = 0;
let bet = 10;

function createCardElement(card) {
	const cardElement = document.createElement('div');
	cardElement.className = 'card';

	const cardValueElement = document.createElement('div');
	cardValueElement.className = 'card-value';
	cardValueElement.textContent = card.value;

	const cardSuitElement = document.createElement('div');
	cardSuitElement.className = 'card-suit';
	cardSuitElement.textContent = getSuitSymbol(card.suit);

	const cardImageElement = document.createElement('img');
	cardImageElement.className = 'card-image';
	cardImageElement.src = getCardImage(card);
	cardImageElement.alt = `${card.value} of ${card.suit}`;

	cardElement.appendChild(cardValueElement);
	cardElement.appendChild(cardSuitElement);
	cardElement.appendChild(cardImageElement);

	return cardElement;
}

function getCardImage(card) {
	let cardImage = '';
	if (card.suit === 'Spades') {
		if (card.value === '2') cardImage = 'images/spade_2.png';
		if (card.value === '3') cardImage = 'images/spade_3.png';
		if (card.value === '4') cardImage = 'images/spade_4.png';
		if (card.value === '5') cardImage = 'images/spade_5.png';
		if (card.value === '6') cardImage = 'images/spade_6.png';
		if (card.value === '7') cardImage = 'images/spade_7.png';
		if (card.value === '8') cardImage = 'images/spade_8.png';
		if (card.value === '9') cardImage = 'images/spade_9.png';
		if (card.value === '10') cardImage = 'images/spade_10.png';
		if (card.value === 'J') cardImage = 'images/spade_jack.png';
		if (card.value === 'Q') cardImage = 'images/spade_queen.png';
		if (card.value === 'K') cardImage = 'images/spade_king.png';
		if (card.value === 'A') cardImage = 'images/spade_1.png';
	} else if (card.suit === 'Hearts') {
		if (card.value === '2') cardImage = 'images/heart_2.png';
		if (card.value === '3') cardImage = 'images/heart_3.png';
		if (card.value === '4') cardImage = 'images/heart_4.png';
		if (card.value === '5') cardImage = 'images/heart_5.png';
		if (card.value === '6') cardImage = 'images/heart_6.png';
		if (card.value === '7') cardImage = 'images/heart_7.png';
		if (card.value === '8') cardImage = 'images/heart_8.png';
		if (card.value === '9') cardImage = 'images/heart_9.png';
		if (card.value === '10') cardImage = 'images/heart_10.png';
		if (card.value === 'J') cardImage = 'images/heart_jack.png';
		if (card.value === 'Q') cardImage = 'images/heart_queen.png';
		if (card.value === 'K') cardImage = 'images/heart_king.png';
		if (card.value === 'A') cardImage = 'images/heart_1.png';
	} else if (card.suit === 'Diamonds') {
		if (card.value === '2') cardImage = 'images/diamond_2.png';
		if (card.value === '3') cardImage = 'images/diamond_3.png';
		if (card.value === '4') cardImage = 'images/diamond_4.png';
		if (card.value === '5') cardImage = 'images/diamond_5.png';
		if (card.value === '6') cardImage = 'images/diamond_6.png';
		if (card.value === '7') cardImage = 'images/diamond_7.png';
		if (card.value === '8') cardImage = 'images/diamond_8.png';
		if (card.value === '9') cardImage = 'images/diamond_9.png';
		if (card.value === '10') cardImage = 'images/diamond_10.png';
		if (card.value === 'J') cardImage = 'images/diamond_jack.png';
		if (card.value === 'Q') cardImage = 'images/diamond_queen.png';
		if (card.value === 'K') cardImage = 'images/diamond_king.png';
		if (card.value === 'A') cardImage = 'images/diamond_1.png';
	} else if (card.suit === 'Clubs') {
		if (card.value === '2') cardImage = 'images/club_2.png';
		if (card.value === '3') cardImage = 'images/club_3.png';
		if (card.value === '4') cardImage = 'images/club_4.png';
		if (card.value === '5') cardImage = 'images/club_5.png';
		if (card.value === '6') cardImage = 'images/club_6.png';
		if (card.value === '7') cardImage = 'images/club_7.png';
		if (card.value === '8') cardImage = 'images/club_8.png';
		if (card.value === '9') cardImage = 'images/club_9.png';
		if (card.value === '10') cardImage = 'images/club_10.png';
		if (card.value === 'J') cardImage = 'images/club_jack.png';
		if (card.value === 'Q') cardImage = 'images/club_queen.png';
		if (card.value === 'K') cardImage = 'images/club_king.png';
		if (card.value === 'A') cardImage = 'images/club_1.png';
	}
	return cardImage;
}

function buildDeck() {
	for (let i = 0; i < values.length; i++) {
		for (let j = 0; j < suits.length; j++) {
			let wt = parseInt(values[i]);
			if (values[i] === 'J' || values[i] === 'Q' || values[i] === 'K') wt = 10;
			if (values[i] === 'A') wt = 11;
			let card = { value: values[i], suit: suits[j], weight: wt };
			deck.push(card);
		}
	}
}

function shuffle() {
	// switch the values of two random cards 1000 times
	for (let i = 0; i < 1000; i++) {
		let location1 = Math.floor(Math.random() * deck.length);
		let location2 = Math.floor(Math.random() * deck.length);
		let tmp = deck[location1];
		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function dealHands() {
	for (let i = 0; i < 2; i++) {
		dealCard('player');
		dealCard('dealer');
	}
	if (playerHandValue === 21 && dealerHandValue !== 21) {
		gameResult('player');
	} else if (playerHandValue === 21 && dealerHandValue === 21) {
		gameResult('push');
	} else if (playerHandValue !== 21 && dealerHandValue === 21) {
		gameResult('dealer');
	}
}

function dealCard(who) {
	const card = deck.pop();
	playedCards.push(card);
	if (deck.length === 0) return 'error';
	if (who === 'player') {
		playerHandValue += card.weight;
		playerHand.push(card);
	} else {
		dealerHandValue += card.weight;
		dealerHand.push(card);
	}
}

function hit() {
	dealCard('player');
	if (playerHandValue > 21) {
		adjustAceValue('player'); // Change function name to adjustAceValue
		if (playerHandValue > 21) gameResult('dealer');
	}
	updateUI();
}

function adjustAceValue(who) {
	if (who === 'player') {
		if (playerHandValue > 21) {
			let firstAce = playerHand.find((card) => card.value === 'A');
			firstAce.weight -= 10;
			playerHandValue = 0;
			for (let i = 0; i < playerHand.length; i++) playerHandValue += playerHand.card.weight;
		}
	} else if (who === 'dealer') {
		if (dealerHandValue > 21) {
			let firstAce = dealerHand.find((card) => card.value === 'A');
			firstAce.weight -= 10;
			dealerHandValue = 0;
			for (let i = 0; i < dealerHand.length; i++) dealerHandValue += playerHand.card.weight;
		}
	}
}

function stand() {
	while (dealerHandValue < 17) {
		dealCard('dealer');
		if (dealerHandValue > 21) adjustAceValue('dealer');
	}
	if (dealerHandValue > 21) {
		gameResult('player');
	} else {
		compareHands(playerHandValue, dealerHandValue);
	}
	updateUI();
}

function newHand() {
	if (deck.length < 20) {
		deck = deck.concat(playedCards);
		playedCards = [];
		shuffle();
	}
	playerHand = [];
	dealerHand = [];
	playerHandValue = 0;
	dealerHandValue = 0;
	clearGame();
	dealHands();
	bet = 10;
	document.getElementById('winnings').textContent = 'Winnings: ' + winnings;
	document.getElementById('player-hand-value').textContent =
		'Player Hand Value: ';
	document.getElementById('dealer-hand-value').textContent =
		'Dealer Hand Value: ';
}
function checkScore() {
	if (playerHandValue > 21) {
		let aces = playerHand.filter((card) => card.value === 'A');
		if (aces.length > 0) {
			for (let i = 0; i < aces.length; i++) {
				playerHandValue -= 10;
				if (playerHandValue <= 21) {
					break;
				}
			}
		}
	}

	if (dealerHandValue > 21) {
		let aces = dealerHand.filter((card) => card.value === 'A');
		if (aces.length > 0) {
			for (let i = 0; i < aces.length; i++) {
				dealerHandValue -= 10;
				if (dealerHandValue <= 21) {
					break;
				}
			}
		}
	}
}

function gameResult(result) {
	let message = '';
	if (result === 'player') {
		message = 'You win!';
		winnings += bet;
	} else if (result === 'dealer') {
		message = 'Dealer wins!';
		winnings -= bet;
	} else {
		message = "Push! It's a tie.";
	}
	document.getElementById('result').textContent = message;
	document.getElementById('winnings').textContent = 'Winnings: ' + winnings;
	document.getElementById('hit-btn').disabled = true;
	document.getElementById('stand-btn').disabled = true;
}

function clearGame() {
	const playerHandElement = document.getElementById('player-hand');
	const dealerHandElement = document.getElementById('dealer-hand');
	const resultElement = document.getElementById('result');

	while (playerHandElement.firstChild) {
		playerHandElement.firstChild.remove();
	}

	while (dealerHandElement.firstChild) {
		dealerHandElement.firstChild.remove();
	}

	resultElement.textContent = '';

	document.getElementById('hit-btn').disabled = false;
	document.getElementById('stand-btn').disabled = false;
}
function renderGame() {
	const playerHandElement = document.getElementById('player-hand');
	const dealerHandElement = document.getElementById('dealer-hand');

	// Clear previous cards
	while (playerHandElement.firstChild) {
		playerHandElement.firstChild.remove();
	}

	while (dealerHandElement.firstChild) {
		dealerHandElement.firstChild.remove();
	}

	// Render player's hand
	playerHand.forEach((card) => {
		const cardElement = createCardElement(card);
		playerHandElement.appendChild(cardElement);
	});

	// Render dealer's hand
	dealerHand.forEach((card) => {
		const cardElement = createCardElement(card);
		dealerHandElement.appendChild(cardElement);
	});

	// Display player's hand value
	const playerHandValueElement = document.getElementById('player-hand-value');
	playerHandValueElement.textContent = 'Player Hand Value: ' + playerHandValue;

	// Hide the dealer's second card if the game is still in progress
	if (playerHand.length === 2 && dealerHand.length === 2) {
		dealerHandElement.children[1].style.display = 'none';
	}

	// Display dealer's hand value
	const dealerHandValueElement = document.getElementById('dealer-hand-value');
	dealerHandValueElement.textContent = 'Dealer Hand Value: ' + dealerHandValue;
}

function getSuitSymbol(suit) {
	if (suit === 'Spades') return '♠';
	if (suit === 'Hearts') return '♥';
	if (suit === 'Diamonds') return '♦';
	if (suit === 'Clubs') return '♣';
}

buildDeck();
shuffle();
dealHands();
renderGame();

document.getElementById('hit-btn').addEventListener('click', hit);
document.getElementById('stand-btn').addEventListener('click', stand);
document.getElementById('new-hand-btn').addEventListener('click', newHand);

function compareHands(playerValue, dealerValue) {
	if (playerValue > dealerValue) {
		gameResult('player');
	} else if (playerValue < dealerValue) {
		gameResult('dealer');
	} else {
		gameResult('push');
	}
}

function updateUI() {
	renderGame();
	checkScore();
}
