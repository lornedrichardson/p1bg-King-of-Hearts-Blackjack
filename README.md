# p1bg-King-of-Hearts-Blackjack
## Software Development Bootcamp Milestone Project 1
## _A very rudimentary browser-based video blackjack game_

This is a blackjack game that performs the basic game functions. There are buttons to hit, stand, and double, as well as initiate a new hand. It will calculate the proper hand value, evaluate to see if an Ace needs to be reduced in value, and determine the winner based upon a comparison of hand values.

## How to Play

The object of blackjack is to beat the dealer. To beat the dealer the player must first not bust (go over 21) and second either outscore the dealer or have the dealer bust. Here are the full rules of the game.

Blackjack may be played with one to eight decks of 52-card decks.

Aces may be counted as 1 or 11 points, 2 to 9 according to pip value, and tens and face cards count as ten points.

The value of a hand is the sum of the point values of the individual cards. Except, a "blackjack" is the highest hand, consisting of an ace and any 10-point card, and it outranks all other 21-point hands.

After the players have bet, the dealer will give two cards to each player and two cards to himself. One of the dealer cards is dealt face up. The facedown card is called the "hole card."

If the dealer has an ace showing, he will offer a side bet called "insurance." This side wager pays 2 to 1 if the dealer's hole card is any 10-point card. Insurance wagers are optional and may not exceed half the original wager.

If the dealer has a ten or an ace showing (after offering insurance with an ace showing), then he will peek at his facedown card to see if he has a blackjack. If he does, then he will turn it over immediately.

If the dealer does have a blackjack, then all wagers (except insurance) will lose, unless the player also has a blackjack, which will result in a push. The dealer will resolve insurance wagers at this time.

Play begins with the player to the dealer's left. The following are the choices available to the player:
- Stand: Player stands pat with his cards.
- Hit: Player draws another card (and more if he wishes). If this card causes the player's total points to exceed 21 (known as "breaking" or "busting") then he loses.
- Double: Player doubles his bet and gets one, and only one, more card.
- Split: If the player has a pair, or any two 10-point cards, then he may double his bet and separate his cards into two individual hands. The dealer will automatically give each card a second card. Then, the player may hit, stand, or double normally. However, when splitting aces, each ace gets only one card. Sometimes doubling after splitting is not allowed. If the player gets a ten and ace after splitting, then it counts as 21 points, not a blackjack. Usually the player may keep re-splitting up to a total of four hands. Sometimes re-splitting aces is not allowed.
- Surrender: The player forfeits half his wager, keeping the other half, and does not play out his hand. This option is only available on the initial two cards, and depending on casino rules, sometimes it is not allowed at all.

After each player has had his turn, the dealer will turn over his hole card. If the dealer has 16 or less, then he will draw another card. A special situation is when the dealer has an ace and any number of cards totaling six points (known as a "soft 17"). At some tables, the dealer will also hit a soft 17.

If the dealer goes over 21 points, then any player who didn't already bust will win.

If the dealer does not bust, then the higher point total between the player and dealer will win.

Winning wagers pay even money, except a winning player blackjack usually pays 3 to 2. Some casinos have been short-paying blackjacks, which is a rule strongly in the casino's favor.

## Known Issues
- Betting is not enabled
- Does not have insurance feature
- Dealing of initial hands is not accurate to proper gameplay
