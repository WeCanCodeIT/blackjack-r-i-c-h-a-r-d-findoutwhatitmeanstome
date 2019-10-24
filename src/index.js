const {
    default: {singleDeckGame}
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");


let playerName = document.getElementById("player_name");
let dealerScore = document.querySelector(".dealer-score");
let playerScore = document.querySelector(".player-score");
let hitButton = document.querySelector(".hit");
let gameStatus = document.querySelector(".status");
playerName.innerHTML = "Richard, Bitch";
// playerName.innerHTML = prompt("What's your name you sick piece of shit?", "Ivana Lose")


// SETUP GAME -----------
singleDeckGame.deal();
console.log(singleDeckGame.getDealerCardUp());

const dealerHand = singleDeckGame.getDealerHand();
const userHand = singleDeckGame.getUserHand();

dealerScore.textContent = singleDeckGame.evaluateDealer();
playerScore.textContent = singleDeckGame.evaluateUser();

Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));


// BUTTONS -------------------

hitButton.addEventListener("click", () => {
    singleDeckGame.hitUser();
    document.querySelector(".user").innerHTML = "";
    Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
    playerScore.innerHTML = singleDeckGame.evaluateUser();
        if (singleDeckGame.isUserBust){
         gameStatus.innerHTML("You Lose");
            };


        if (singleDeckGame.evaluateDealer > 21) {
          alert("You Win!")
            }
});







    



