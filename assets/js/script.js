
//overlay functions from w3schools https://www.w3schools.com/howto/howto_css_overlay.asp 
function onOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function offOverlay() {
  document.getElementById("overlay").style.display = "none";
}

const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
    console.log('i was flipped');
}

cards.forEach(card => card.addEventListener('click', flipCard));