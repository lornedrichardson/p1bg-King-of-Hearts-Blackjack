# p1bg-King-of-Hearts-Blackjack
## Software Development Bootcamp Milestone Project 1
## _A very rudimentary browser-based video blackjack game_

This is a blackjack game that performs the basic game functions. 
There are buttons to hit and stand, as well as initiate a new hand. 
It will calculate the proper hand value, evaluate to see if an Ace 
needs to be reduced in value, and determine the winner based upon a 
comparison of hand values.

## How to Play

The object of blackjack is to be the closest to 21 without going 
over. There is a dealer, who goes last and banks all the wagers, 
and there is at least one player (although in casinos, there are as 
many as seven). This game will have one player and the dealer.

Both the player and the dealer initially get dealt two cards in 
alternating fashion, with the player getting dealt to first. The 
dealer's second card, however, remains hidden from the players and 
is only revealed after all of the players have finished their turns.

When all of the initial hands have been dealt, any player who has a 
blackjack automatically wins, unless the dealer has one also. The 
dealer checks the hidden card to see if the dealer has a blackjack, 
because if the dealer has a blackjack, any player who does not have 
a blackjack also automatically loses. If both a player and the 
dealer have a blackjack, those players tie or "push" with the 
dealer.

If neither the dealer nor the player has a blackjack, normal play 
begins with the player to the left of the dealer. Each player has a 
couple of options. First, the player can "hit," meaning the player 
gets dealt another card. If the player goes over 21, the player 
"busts" and loses the game. Another option is that the player can 
"stand," meaning the player has finished taking cards and will keep 
the score the player presently has. The player always stands when 
they are done hitting, unless the player has busted and already 
lost.

Once the player stands, it is the dealer's turn. The dealer follows 
a fixed set of rules. For this game, the dealer will stand if the 
dealer has a score of 17 or more and must hit if the dealer has 
less than 17. (This was a key rule in what was once called "Strip 
Rules Blackjack.") Just like the player, if the dealer draws and 
goes over 21, the dealer "busts" as well and automatically loses.

Once both the player and dealer have stood, the scores of each hand 
are compared, and the highest score wins! Then, it's on to the next 
hand, where the process repeats....

## Known Issues
- Correct cards don't always display (happens a lot with diamonds suit)
- Screen must be refreshed after hitting New Hand button in order to get the cards to display
- Betting is fixed at 10 units right now
- Does not have double button
- Does not have insurance feature
