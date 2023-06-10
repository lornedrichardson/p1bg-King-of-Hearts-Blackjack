/** @format */

// Constants
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

// Game variables
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerHandValue = 0;
let dealerHandValue = 0;
let gameOver = false;

// DOM elements
const playerHandElement = document.getElementById('player-hand');
const dealerHandElement = document.getElementById('dealer-hand');
const messageElement = document.getElementById('message');

// Build the deck array of card objects
function buildDeck() {
	for (let suit of suits) {
		for (let value of values) {
			let weight = parseInt(value);
			if (value === 'J' || value === 'Q' || value === 'K') {
				weight = 10;
			} else if (value === 'A') {
				weight = 11;
			}
			deck.push({ suit, value, weight });
		}
	}
}

// Shuffle the deck using Fisher-Yates algorithm
function shuffle() {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
}

// Create a DOM element for a card
function createCardElement(card) {
	const cardElement = document.createElement('div');
	cardElement.classList.add('card');
	const valueElement = document.createElement('div');
	valueElement.classList.add('value');
	valueElement.textContent = card.value;
	const suitElement = document.createElement('div');
	suitElement.classList.add('suit');
	suitElement.textContent = getSuitSymbol(card.suit);
	cardElement.appendChild(valueElement);
	cardElement.appendChild(suitElement);
	return cardElement;
}

// Get the HTML entity for a suit symbol
function getSuitSymbol(suit) {
	switch (suit) {
		case 'Spades':
			return '♠︎';
		case 'Hearts':
			return '♥︎';
		case 'Diamonds':
			return '♦︎';
		case 'Clubs':
			return '♣︎';
		default:
			return '';
	}
}

// Deal a card to a hand and update the DOM
function dealCard(hand, handElement) {
	const card = deck.pop();
	hand.push(card);
	const cardElement = createCardElement(card);
	handElement.appendChild(cardElement);
}

// Calculate the value of a hand
function calculateHandValue(hand) {
	let value = 0;
	let numAces = 0;
	for (let card of hand) {
		value += card.weight;
		if (card.value === 'A') {
			numAces++;
		}
	}
	while (value > 21 && numAces > 0) {
		value -= 10;
		numAces--;
	}
	return value;
}

// Handle player hitting
function hit() {
	if (gameOver) return;
	dealCard(playerHand, playerHandElement);
	playerHandValue = calculateHandValue(playerHand);
	if (playerHandValue > 21) {
		endGame('You busted! You lose.');
	}
}

// Handle player standing
function stand() {
	if (gameOver) return;
	while (dealerHandValue < 17) {
		dealCard(dealerHand, dealerHandElement);
		dealerHandValue = calculateHandValue(dealerHand);
	}
	if (dealerHandValue > 21) {
		endGame('Dealer busted! You win!');
	} else if (dealerHandValue === playerHandValue) {
		endGame("Push! It's a tie.");
	} else if (dealerHandValue > playerHandValue) {
		endGame('You lose.');
	} else {
		endGame('You win!');
	}
}

// Handle player doubling
function double() {
	hit();
	stand();
}

// End the game
function endGame(message) {
	gameOver = true;
	messageElement.textContent = message;
}

// Initialize the game
function initializeGame() {
	deck = [];
	playerHand = [];
	dealerHand = [];
	playerHandValue = 0;
	dealerHandValue = 0;
	gameOver = false;
	playerHandElement.innerHTML = '';
	dealerHandElement.innerHTML = '';
	messageElement.textContent = '';

	buildDeck();
	shuffle();

	dealCard(playerHand, playerHandElement);
	dealCard(playerHand, playerHandElement);
	playerHandValue = calculateHandValue(playerHand);

	dealCard(dealerHand, dealerHandElement);
	dealerHandValue = calculateHandValue(dealerHand);

	if (playerHandValue === 21) {
		endGame('Blackjack! You win!');
	}
}

// Event listeners
document.getElementById('hit-btn').addEventListener('click', hit);
document.getElementById('stand-btn').addEventListener('click', stand);
document.getElementById('dbl-btn').addEventListener('click', double);
document
	.getElementById('restart-btn')
	.addEventListener('click', initializeGame);

// Initialize the game on page load
initializeGame();