<h1>Memory Game</h1>

<h2>How naughty is your memory?</h2>

**A fun website to play a pinup themed memory game. The website features a starting page with a black and white background gif and a play button. 
Then the user is led to a  memory game with 30 cards.  
The time of the game is adjustable at the start of the game, so the player can make a real challenge for themselves.  
There is also a possibility to see your flips, beside the time- it is the amount of pairs flipped of your session.  
This site is more attractive than the average online memory game and therefore has the potential to entertain visitors.  
The goal of the site is to entertain, the goal of the visitor is to be entertained.** 

<h2>UX</h2>

The ideal visitor has a feeling for humor, is not too prude (even though the content is absolutely not x-rated)
and likes playing memory games online. 

Visitors are searching for an entertaining experience.
This website provides that because it has a cheeky theme and is not only designed to be practical but also 
in a visually pleasing way. The visitor can have a game, a laugh, and a pleasant virtual experience. 

<h3>Visitor stories</h3>

1. As a new visitor, I want to easily find my way to the game.
2. As a new visitor, I would like to understand how to play without reading anything.
3. As a player, I want to see my score.
4. As a player, I want to adjust my level (by changing the time I can play)

*Visitors find the experience they are searching for because:*
- This game is visually pleasing
- It is not super easy and does not start with 4/5 pairs of cards like most online memory games
- The player can change the level easily, thus creating an easier game or a true challenge
- The navigation is easy and straightforward, in one click the game begins

<h3>Wireframes</h3>

![Overlay desktop version](/assets/img/wireframes/wireframe1.png)
![Index.html desktop version](/assets/img/wireframes/wireframe2.png)
![Overlay mobile version](/assets/img/wireframes/wireframe3.png)
![Index.html mobile version](/assets/img/wireframes/wireframe4.png)

<h2>Features</h2>

*The game features three overlays and the main page.*

- Overlay *"seconds"* is the first thing a player sees when visiting the site. This overlay is a black and white gif of a woman's knees, lifting up her skirt above them and placing the skirt back down as well.
The title is How Naughty is your memory? And under that, you can select the number of seconds that you would like to complete the game. When you click on the play icon, the overlay closes.

- Index.html page features a memory game of 30 cards, a countdown of the seconds that the player chose, and a counter of flips. The cards flip on click and display a drawing of a pin-up, they are paired - when the player finds two
the same they stay 'open'. This lasts until all cards are flipped, on which the *"victory"* overlay is activated, or the countdown finishes, and the *"lost"* overlay is displayed.

- *"Victory"* overlay displays a black and white gif of a sexy moving Dita von Teese and the text: Victory, enjoy your Teese. After 6 seconds the overlay changes automatically to the *"seconds"* overlay.

- *"Lost"* overlay displays a black and white gif of a stern-looking woman, with the text: Oh no! You lost. After 6 seconds the overlay changes automatically to the *"seconds"* overlay.

*Features to implement in the future:*

- The game could be improved by making the player choose the number of cards as well
- Adding more games with the same theme to choose from  
etc

<h2>Technologies used</h2>

- Gitpod to develop the website
- GitHub to deploy the website
- Google fonts for the old fashioned font
- Html, Css and JavaScript are the developing languages
- moqups.com for the wireframes
- lambdatest.com for static testing
- Chrome dev tools for manual testing

<h2>Testing</h2>

Testing information can be found in the [TESTING.md](TESTING.md) file

<h2>Deployment</h2>

The game is deployed through GitHub. 

Steps to setup GitHub deployment:
- Go to your project's Code & Deploys page, in the Repository tab.
- Click the CONNECT TO GITHUB button to connect your project with GitHub. 
- Connect to one of your GitHub repositories. 
- Configure the deploy options.
- Deploy your project.
(as described by https://support.zyte.com/)

This is what I did. The configuration is on auto, which means that the repository will get updated if I push 
something from the connected GitPod dev area. The site is now live at https://annakovesdi.github.io/milestone-project-2/

You can clone a repository from GitHub to your local computer to make it easier to fix merge conflicts, add or remove files, and push larger commits. When you clone a repository, you copy the repository from GitHub to your local machine.

Cloning a repository pulls down a full copy of all the repository data that GitHub has at that point in time, including all versions of every file and folder for the project. You can push your changes to the remote repository on GitHub, or pull other people's changes from GitHub. 
How to do this is described dtep by step at 
https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

<h2>Credits</h2>

While starting to try to tackle Javascript I recreated two youtube tutorials in their entirety. These tutorials are: 
- **Memory Card Game - JavaScript Tutorial** (https://www.youtube.com/watch?v=ZniVgo8U7ek&t=4s) by FreeCodeCamp.org  

and 

- **How To Code A Card Game In Plain JavaScript - Spooky Halloween Edition** (https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=2637s) by PortEXE

I relied heavily on these resources to write my code. I am sure a lot of the logic of the tutorials is completely integrated into my project. I watched them so often, I can recite them in my sleep. It was very hard to get 
a hang of Javascript for me but I have to say that I really start to "get" it, finally, and am planning to practice A LOT.  
Towards the end, the code was flowing, and I could solve issues by myself (i got the help of tutors before that).
I tried to credit my code where appropiate. I hope you understand that it is not that clear: I try to refrain from copy pasting code in it's entirety. I change things as I go along.
The credit is there, sometimes almost the same, sometimes more as the inspiring and teaching scource from where it started. 



>The memory card game tutorials were my beacon the darkness, my lighthouse in a stormy sea, my refuge from a desperate stackoverflow wormhole. I can not credit them enough for helping me forward and making this game.

To get a hang of the subject I did: 
- The entire Javascript coding chapter of FreeCodeCamp 
- and deep-dived into their video tutorial (https://www.youtube.com/watch?v=PkZNo7MFNFg)
- read the book "A smarter way to learn Javascript" by Mark Myers 

I have to credit all of these for finally getting there, where I needed to be in my understanding of this language. 

<h3>GIFs and pictures</h3>

The credit for the gifs goes to GIPHY.
- Woman Legs GIF for "seconds" overlay https://giphy.com/gifs/woman-legs-2j5Jj6bjfNJLy
- Black And White Brooks GIF for "lost" overlay https://giphy.com/gifs/brooks-louise-736he3qcXJhwQ
- Oh Dita Take Me Now GIF for "victory" overlay https://giphy.com/gifs/dita-von-teese-oh-take-me-now-p09nbHVNTYn6

The credit of the drawn images on the cards goes to *AnnaliseArt* on Pixabay.com
- Girl 3 https://pixabay.com/illustrations/pin-up-girl-retro-marilyn-monroe-5019512/
- Girl 6 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997597/
- Girl 12 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997605/
- Girl 15 https://pixabay.com/illustrations/woman-pin-up-christmas-retro-5715011/
- Girl 11 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997604/
- Girl 8 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997599/
- Girl 7 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997598/
- Girl 5 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997592/
- Girl 10 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997603/
- Girl 16 https://pixabay.com/illustrations/pin-up-girl-picnic-retro-pinups-4898242/
- Girl 4 https://pixabay.com/illustrations/pin-up-girl-retro-vintage-1950-s-5049068/
- Girl 2 https://pixabay.com/illustrations/pin-up-retro-vintage-model-girl-5066963/
- Girl 9 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997602/
- Girl 13 https://pixabay.com/illustrations/pin-up-girls-retro-vintage-fashion-4997608/
- Girl 14 https://pixabay.com/illustrations/woman-penguin-christmas-pin-up-girl-5715008/

