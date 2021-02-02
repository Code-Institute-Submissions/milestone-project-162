Memory Game-

How naughty is your memory?

A fun website to play a pinup themed memory game. The website features a starting page with a black and white background gif and a play button. 
Then the user is led to a  memory game with :: cards. The time of the game is adjustable at the start of the game, so the player can make a real challenge for themselves. 

There is also a possibility to see your score, beside the time- it is the won vs lost score of your session. 
This site is more attractive then the average online memory game and therefore has potential to entertain the visitors.

The goal of the site is to entertain, the goal of the visitor is to be entertained. 

UX

The ideal visitor has a feeling for humor, is not too prude (even though the content is absolutely not x-rated)
and likes playing memory games online. 

Visitors are searching for an entertaining experience.
This website provides that because it has a cheeky theme and is not only designed to be practical but also 
in a visually pleasing way. The visitor can have a game, a laugh and a pleasant virtual experience. 

Visitor stories
As a new visitor, i want to easily find my way to the game.
As a new visitor, i would like to understand how to play without reading anything.
As a player, i want to see my score.
As a player, i want to adjust my level.
As a fan, i want to share this game.

Wireframes: 


bugs that i see on the way: 
-if card is clicked as card one, falsley matched, fipped back and again as card one - it does not flip. sol: this is because cardone is still defined. I came to the answer while chatting to a tutor, he told me this is called rubber ducking. Adding cardOne 0 undefned did the trick
-onload or documentreadystate triggers overlay but does this continuesly, not just one time. whyyyyy
When the page is loaded, an overlay is activated- and on click, this overlay should disappear. The weird thing is, that it only works a little. Sometimes is disappears/comes back/disappears/comes back and then it is suddenly gone (if you click it loads of times) but i cannot figure out why. I have a feeling when the page is loading still maybe? But too inconsistent for that...Any tip is welcome! 
sol: so the integration of the timer changed all this, it was working properly by creating the startgame function and the time function(not sure why though), but when i made the fill in field of seconds obligatory (in a from html tag) it did it again. I learned that when a form is submitted the page reloads so i needed to create a button instead, with a event preventDefault in the function that runs the offoverlay. Now it does not reload. 
-how to chain events? code is too long, this could be prettier!(answer from mntor, was not working. asking tutor in future)
-in time function: when time is finished, lostGame function is called. But this gets called right away when starting up the game. Whyyyy?????
-if you win really on the last second, the win screen and lost screen both pop up (lost is dominant). solved it by integrating the overlay on in the time function instead of the match function. Switched oder, first clear interval then overlays. 
-lichthouse issues: no disability things on the play button and seconds screen. added the label and button aria label. 
-simulator tests throuout devices with chrome dev tools
-the overlay was never really long enough. could fix this in chrome by tweaking all the min-heigth width properties but not accross browsers. Found out i forgot to remove standard padding and margin on body.https://stackoverflow.com/questions/2852276/make-div-overlay-entire-page-not-just-viewport
