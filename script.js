const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];
let playedCards = [];
let playerHand = [];
let dealerHand = [];
let playerHandValue = 0;
let dealerHandValue = 0;

function buildDeck() {
  for (let i = 0 ; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      let wt = parseInt(values[i]);
      if (values[i] == "J" || values[i] == "Q" || values[i] == "K") wt = 10;
      if (values[i] == "A") wt = 11;
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

function dealStartingHands() {
  for (let i = 0; i < 2; i++) {
    dealCard("player");
    dealCard("dealer");
  }
  if (playerHandValue === 21 && dealerHandValue !== 21) gameResult("player");
  else if (playerHandValue === 21 && dealerHandValue === 21) gameResult("push");
  else if (playerHandValue !== 21 && dealerHandValue === 21) gameResult("dealer");
}

function dealCard(who) {
  const card = deck.pop();
  playedCards.push(card);
  if (deck.length === 0) return "error";
  if (who === "player") {
    playerHandValue += card.weight;
    playerHand.push(card);
  } else {
    dealerHandValue += card.weight;
    dealerHand.push(card);
  }
}

function checkAceValue(who) {
  if (who === "player") {
    if (playerHandValue > 21) {
      playerHand.find((card) => (card.value === "A" && card.weight === 11));
      card.weight -= 10;
    }
  } else if (who === "dealer") {
    if (dealerHandValue > 21) {
      dealerHand.find((card) => (card.value === "A" && card.weight === 11));
      card.weight -= 10;
    }
  }
}

function hit() {
  // pop a card from the deck to the current player
  // check if current player new points are over 21
  dealCard("player");
  checkAceValue("player");
  if (playerHandValue > 21) gameResult("dealer");
}

function stand() {
  // move on to dealer and perform dealer logic
  while (dealerHandValue < 17) {
    dealCard("dealer");
    checkAceValue("dealer");
  }
  if (dealerHandValue > 21) gameResult("player");
  compareHands(playerHandValue, dealerHandValue);
}

function double() {
  hit();
  stand();
}

function compareHands(playerHandValue, dealerHandValue) {
  if (playerHandValue > dealerHandValue) gameResult("player");
  else if (dealerHandValue > playerHandValue) gameResult("dealer");
  else gameResult("push");
}

function gameResult(result) {
  switch (result) {
    case "player":
      // player win code
      break;
    case "dealer":
      // dealer win code
      break;
    case "push":
      // push code
      break;
  }
}

window.addEventListener('load', () => {
  buildDeck();
  shuffle();
  dealStartingHands();
});