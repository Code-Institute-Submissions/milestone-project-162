
const card = document.getElementsByClassName('card');
const cardsArr = Array.from(card);
let clickedCard = false;
let lock = false;
let cardOne;
let cardTwo; 
let flips = 0;



// How to build a countdown? https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown answer of Teddy Koker
let timeleft = getSeconds();
    
function time() { 
    setInterval(function () {
        timeleft--;
        document.getElementById("time").textContent = timeleft;
        console.log(timeleft);
        if (timeleft <= 0)
            //clearInterval(time);
            lostGame();
    }, 1000);
};


// clicks counter https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter answer by Jumpoy
function flipscounter() {
        flips += 1;
        document.getElementById("flips").innerHTML = flips;
    };

function lostGame() {
        console.log('lost');
        clearInterval(time, 1000);
        alert("Lost Game!");
        onOverlay();
        //startGame();
};


function flipCard() {
    if (lock === true) return;
    if (this === cardOne) return;
    this.classList.add('flip');
    this.classList.remove('hover');
    if (!clickedCard) {
        clickedCard = true;
        console.log("firstcard");
        cardOne = this;
    } else {
        console.log("secondcard");
        clickedCard = false;
        cardTwo = this;

        lock = true;
        flipscounter();
        matchCard();
    };
};

function matchCard() {
    if (getCardType(cardOne) === getCardType(cardTwo)) {
        console.log("match");
        match();
    } else {
        console.log("MISmatch");
        misMatch();
    };
};

function match() {
    cardOne.removeEventListener('click', flipCard);
    cardOne.classList.remove('hover');
    console.log(cardOne);
    cardTwo.removeEventListener('click', flipCard);
    cardTwo.classList.remove('hover');
    console.log(cardTwo);
    lock = false;
};

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

function getCardType(card) {
   let dataCard = card.getAttribute('data-card');
   return dataCard;
};


function startGame() {
    console.log('startgame')
    shuffle();
    timeleft = getSeconds();
    time();
    flips = 0;
    lock = false;
    clickedCard = false;
    cardsArr.forEach(card => {
        card.classList.remove('flip');
        card.classList.add('hover');
    });
    ActiveCards();
}

//overlay functions from w3schools https://www.w3schools.com/howto/howto_css_overlay.asp 
/*function onOverlay() {
  let overlays = Array.from(document.getElementById("overlay").style.display = "block");
   // overlays.forEach(overlay => {
        overlays.addEventListener('click', ()  => {
            overlays.style.display = "none";
           // });
    });
};
*/
function onOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    document.getElementById("play").addEventListener("click", offOverlay);
};

function offOverlay() {
    console.log('offoverlay')
    document.getElementById("overlay").style.display = "none";
    startGame();
}

// code from answer Laurens Holst https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array and https://www.youtube.com/watch?v=3uuQ3g92oPQ to delete last line to make it work
function shuffle() {
    for (let i = cardsArr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        cardsArr[j].style.order = i;
        cardsArr[i].style.order = j;
    };
};


function getSeconds() {
    let seconds = document.getElementById("seconds").value;
    return seconds;
}

function ready() {
    onOverlay();
};


// https://www.youtube.com/watch?v=3uuQ3g92oPQ
if (document.readystate === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
};

//window.onload = ready();
function ActiveCards() {
    cardsArr.forEach(card => card.addEventListener('click', flipCard));
};

