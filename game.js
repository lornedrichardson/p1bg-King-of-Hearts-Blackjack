const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function buildDeck() {
  var deck = new Array();
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
}

function dealCard(who) {
  
}

function updateHandValue() {
  for (var i = 0 ; i < players.length; i++) {
    getHandValue(i);
    document.getElementById('Hand_value_' + i).innerHTML = players[i].handValue;
  }
}

function getHandValue(player) {
  let total = 0;
  for (let i = 0; i < players[player].hand.length; i++) total += players[player].hand[i].weight;
  players[player].handValue = total;
  return total;
}

function hit() {
  // pop a card from the deck to the current player
  // check if current player new points are over 21
  let card = deck.pop();
  players[currentPlayer].hand.push(card);
  renderCard(card, currentPlayer);
  updateHandValue();
  updateDeck();
  check();
}

function stand() {
  // move on to next player
  if (currentPlayer != players.length - 1) {
    document.getElementById('player_' + currentPlayer).classList.remove('active');
    currentPlayer += 1;
    document.getElementById('player_' + currentPlayer).classList.add('active');
  } else end();
}

function end() {
  let winner = -1;
  let score = 0;

  for (let i = 0; i < players.length - 1; i++) {
    if (players[i].handValue > players[players.length - 1].handValue && players[i].handValue < 22) winner = i;
    score = players[i].handValue;
  }
  document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].id;
  document.getElementById("status").style.display = "inline-block";
}

function compareHandValues() {
  if (players[currentPlayer].handValue > 21) document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].id + ' Busted';
  document.getElementById('status').style.display = "inline-block";
  end();
}

function updateDeck() {
  document.getElementById('deckcount').innerHTML = deck.length;
}

window.addEventListener('load', () => {
  buildDeck();
  shuffle();
  dealStartingHands();
});