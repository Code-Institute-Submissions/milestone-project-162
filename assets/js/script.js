
const card = document.getElementsByClassName('card');
const cardsArr = Array.from(card);

let clickedCard = false;
let cardOne;
let cardTwo; 

function flipCard() {
    this.classList.add('flip');

    if (!clickedCard) {
        clickedCard = true;
        console.log("firstcard");
        cardOne = this;
    } else {
        console.log("secondcard");
        clickedCard = false;
        cardTwo = this;

        matchCard();
    };
};

function matchCard() {
    if (getCardType(cardOne) === getCardType(cardTwo)) {
        console.log("match");
        match();
        //cardOne.removeEventListener('click', flipCard);
        //cardTwo.removeEventListener('click', flipCard);
    } else {
        console.log("MISmatch");
        misMatch();
        //cardOne.classList.remove('flip');
        //cardTwo.classList.remove('flip');
    };
};

function match() {
    cardOne.removeEventListener('click', flipCard);
    cardOne.classList.remove('hover');
    console.log(cardOne);
    cardTwo.removeEventListener('click', flipCard);
    //.classList.remove('card:hover');
    console.log(cardTwo);
};

function misMatch() {
    cardOne.classList.remove('flip');
    cardTwo.classList.remove('flip');
}

function getCardType(card) {
   let dataCard = card.getAttribute('data-card');
   return dataCard;
};
/*
function getCard() {
    let clickedCard = card.getElementsByClassName('card');
    console.log(clickedCard);
};

function startGame() {
    onOverlay();
}

//overlay functions from w3schools https://www.w3schools.com/howto/howto_css_overlay.asp 
function onOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function offOverlay() {
  document.getElementById("overlay").style.display = "none";
}
*/

cardsArr.forEach(card => card.addEventListener('click', flipCard));

