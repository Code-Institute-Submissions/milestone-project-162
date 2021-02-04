<h1>Testing</h1>

<h2>Validation</h2>

I put the code through various validators. 
The HTML in freeformatter.com, where it gave 7 red error codes and 2 yellow ones (using section without heading). I 
solved all the red ones, but let the sections without heading in this particular case. 

![Html validator 1](/assets/img/screenshots/html1.png)
![Html validator 2](/assets/img/screenshots/html2.png)

The css validator of w3c CSS validator did not find any errors

![Css validator](/assets/img/screenshots/css.png)

The JavaScript validator of beautifytools.com found one error that was important to change (highlighted by selection) that I changed.

![JavaScript validator](/assets/img/screenshots/js.png)

<h2>Visitor stories testing</h2>

1. As a new visitor, I want to easily find my way to the game.

When I arrive on the website, a screen is displayed that is kind of welcome page, but also asks me to insert the time that I would like to play.
I can only continue if I insert a number, and then in one click on the play button I am on the page of the game and the game has started (visible because the countdown has started to run).
So it takes just inserting the time and one click to play. 

![First page of game](/assets/img/screenshots/seconds.png)

2. As a new visitor, I would like to understand how to play without reading anything.

Because the overlay has a placeholder of 100 the instruction does not need to be read - the player can just enter 100 and move on to the game. The cards become visible after clicking play, and 
it's intuitive to start clicking cards when you see them. They start turning and you are playing. When your time is up and you did not find every match yet, you lost. An overlay pops up for 6 seconds telling you this. After, you
are automatically transported back to the first page where the seconds to play are asked. 
If you find all the matches before the time is up, you win. An overlay activates for 6 seconds, telling you so. After, you
are automatically transported back to the first page where the seconds to play are asked. 

![Lost](/assets/img/screenshots/lost.png)
![Victory](/assets/img/screenshots/victory.png)



3. As a player, I want to see my score.

While playing, every two cards that turn activate the flip counter. Like this, you can see how many flips you do throughout the game.
Also, the countdown of your chosen amount of seconds is always visible. Like this, you can see how much time you have left to win. 

![Game playing](/assets/img/screenshots/game.png)

4. As a player, I want to adjust my level (by changing the time I can play)

Immediately when arriving on the site, the time to play is asked. It is not possible to proceed without entering your time to play.

<h2>Manual (logical) testing of all elements, functionality</h2>

Step by step, I will guide you through the page, and describe bugs that I fixed and the functionality of the finished site.

<h3>Seconds overlay</h3>

The seconds overlay needs, in the first place, to cover the cards completely on all browsers. I tested this with the static tester of 
lambdatest.com, where it became evident soon enough that this was not the case (see screenshot).

![faulty overlay](/assets/img/screenshots/test.png)

I could fix this in chrome by tweaking all the min-height and width properties but not across all browsers. Found out I forgot to remove standard padding and margin on body at https://stackoverflow.com/questions/2852276/make-div-overlay-entire-page-not-just-viewport

The overlay displays a  form field where seconds need to be filled in. It is important that this field is required: if it's empty an alert
asks to fill in the field. I made this happen using JavaScript. I tested it by trying to press play with an empty field. 
The problem that my mentor pointed out to me that you could also fill in "x" and then the countdown would just display NaN and you would have unlimited time to find the matches. 
To prevent this from happening I made the field a number field, so nothing other than numbers can be filled in. 
Trying to fill in anything but a number will now leave the field empty, and the game inaccesible.


The overlay function gets called onload. The bug here was that it would reload after filling in a field, and thus create an endless loop of this overlay.
I learned that when a form is submitted the page reloads so I needed to create an event preventDefault in the function that runs the offoverlay. Now it does not reload anymore. 

Lighthouse told me that accessibility was weak because of the play button and the seconds field. I added the label for the field to make it clear for screen readers and in the button tag an aria label.

<h3>Memory Game</h3>

The cards of the memory game are tested by various 'crazy clicking' tests. If you click a card, and then another one, JavaScript checks for a match and leaves the cards open if they match or turns them 
back when they don't. To test this functionality I tried clicking the same card twice, to check if I properly prevented from forming a match like this by itself. I also tried to click super fast on a lot of cards, to see if I 
prevented that no more then two cards could be flipped in one go. I also tried to click the same unmatching cards over and over again, to see if they would flip like I would like them to. 
This is where I ran into a bug. If I flipped cardOne and cardTwo, they did not match and flipped back, and I tried clicking the previous cardOne again as cardOne, it would not flip. This is because cardOne was still defined.
So I needed to add cardOne = undefined to the function that flipped the cards back to solve this bug. I came to the answer while chatting to a tutor, he told me this is called rubber ducking. 
I will add a rubber duck to my desk in the near future :). 

<h3>The cascading events in JavaScript</h3>

The biggest issue I had was to get the cascading of events in Javascript right. I can see that all is working when I run the website and the overlay is activated immediately. 
When the seconds are filled in as numbers and the play button is pressed, the cards are all shown with their backs and the timer is counting down from the number of seconds that the player filled in.
The cards show a slight transition on hover and they flip when clicked. Only two cards flip in one go. Every time two cards are flipped, the counter counts a flip. 
When the two cards match, the hover transition is disactivated, the cards stay open and are not clickable anymore. 
When the cards don't match, they flip back. 
If the time is up, the lost overlay gets activated, and after 6 seconds, the seconds overlay is displayed again
/
If all the cards are matched, the victory overlay gets activated, and after 6 seconds, the seconds overlay is displayed again

If then the player fills in a new amount of seconds, the countdown starts again from the new amount of seconds. The flips are reset to 0. The game can be played again like the first time.

I played the game an endless amount of times (with just two cards) to get all of this right.

A bug I ran into when all seemed to work, was that if you win really on the last second, the win screen and lost screen both pop up (lost is dominant). solved it by integrating the overlay on in the time function instead of the match function. Switched order inside of function of the time ending and the lost overlay getting activated (first clear interval then overlays). 
Now, this does not happen anymore. 

<h3>Testing across browsers and devices</h3>

I did simulator tests throughout devices with chrome dev tools. I made sure the game looks okay on mobile devices, laptops and ipads. 
I asked (facebook)friends and family to play the game and let me know what browser and device they used, and if they ran into any bugs. 
No bugs were reported, and lots of different devices were used. 
