
const card = document.getElementsByClassName('card');
const cardsArr = Array.from(card);
let matchedArr = [];
let clickedCard = false;
let lock = false;
let cardOne;
let cardTwo; 
let flips = 0;
let timeleft = getSeconds();

window.onload = onOverlaySeconds();

//start game
function startGame() {
    shuffle();
    timeleft = getSeconds();
    time();
    flips = 0;
    lock = false;
    clickedCard = false;
    matchedArr = [];
    cardOne = undefined;
    cardsArr.forEach(card => {
        card.classList.remove('flip');
        card.classList.add('hover');
    });
    flipCardsBack();
};

//countdown timer
// How to build a countdown? https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown answer of Teddy Koker
function getSeconds() {
    let seconds = document.getElementById("seconds").value;
    return seconds;
};

function time() { 
    const interval = setInterval(function () {
        timeleft--;
        document.getElementById("time").textContent = timeleft;
        if (timeleft <= 0) {
            clearInterval(interval);
            onOverlayLost();
        } else if (matchedArr.length === cardsArr.length) {
            clearInterval(interval);
            onOverlayVictory();
        };
    }, 1000);
};

// clicks counter https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter answer by Jumpoy
function flipscounter() {
        flips += 1;
        document.getElementById("flips").innerHTML = flips;
    };

//shuffle cards
// code from answer Laurens Holst https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array and https://www.youtube.com/watch?v=3uuQ3g92oPQ to delete last line to make it work
function shuffle() {
    for (let i = cardsArr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        cardsArr[j].style.order = i;
        cardsArr[i].style.order = j;
    };
};

//flip a card on click https://www.youtube.com/watch?v=ZniVgo8U7ek
function flipCard() {
    if (lock === true) return;
    if (this === cardOne) return;
    this.classList.add('flip');
    this.classList.remove('hover');
    if (!clickedCard) {
        clickedCard = true;
        cardOne = this;
    } else {
        clickedCard = false;
        cardTwo = this;
        lock = true;
        flipscounter();
        matchCard();
    };
};

//compare cards by data-type
function getCardType(card) {
   let dataCard = card.getAttribute('data-card');
   return dataCard;
};

//match cards https://www.youtube.com/watch?v=ZniVgo8U7ek
function matchCard() {
    if (getCardType(cardOne) === getCardType(cardTwo)) {
        match();
    } else {
        misMatch();
    };
};

//if cards match
function match() {
    cardOne.removeEventListener('click', flipCard);
    cardOne.classList.remove('hover');
    matchedArr.push(cardOne);
    cardTwo.removeEventListener('click', flipCard);
    cardTwo.classList.remove('hover');
    matchedArr.push(cardTwo);
    lock = false;
};

//if cards don't match. Set timeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
function misMatch() {
    setTimeout(() => {
    cardOne.classList.remove('flip');
    cardOne.classList.add('hover');
    cardTwo.classList.remove('flip');
    cardOne.classList.add('hover');
    lock = false;
    cardOne = undefined;
    }, 1100);
};

//flip cards back if they dont match
function flipCardsBack() {
    cardsArr.forEach(card => card.addEventListener('click', flipCard));
};

//overlay on and off functions for second-input overlay, victory overlay, lost game overlay
//overlay functions from w3schools https://www.w3schools.com/howto/howto_css_overlay.asp 
function onOverlaySeconds() {
    let overlay = document.getElementById("overlay-seconds");
    overlay.style.display = "block";
    document.getElementById("play").addEventListener("click", secondsRequired);
};

//required to fill in seconds
//how to set required in javascript https://www.w3resource.com/javascript/form/non-empty-field.php
function secondsRequired()  {
    let seconds = document.getElementById("seconds");
    if (seconds.value.length === 0) { 
         alert("Please fill in seconds to play");  	 
      } else { 
      offOverlaySeconds(event); 
    };
};

function onOverlayLost() {
    let overlay = document.getElementById("overlay-lost");
    overlay.style.display = "block";
    document.getElementById("flips").innerHTML = 0;
    setTimeout(() => {
        offOverlayLost();
    }, 6000);
}

function onOverlayVictory() {
    let overlay = document.getElementById("overlay-victory");
    overlay.style.display = "block";
    document.getElementById("flips").innerHTML = 0;
    setTimeout(() => {
        offOverlayVictory();
    }, 7000);
}

function offOverlayLost() {
    document.getElementById("overlay-lost").style.display = "none";
    onOverlaySeconds();
}

function offOverlayVictory() {
    document.getElementById("overlay-victory").style.display = "none";
    onOverlaySeconds();
}

//preventDefault https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
function offOverlaySeconds(e) {
    document.getElementById("overlay-seconds").style.display = "none";
     e.preventDefault();
    startGame();
};

//if player starts again, all cards are closed again
function flipCardsBack() {
    cardsArr.forEach(card => card.addEventListener('click', flipCard));
};
