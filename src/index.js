const {
    default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");




let playerName = document.getElementById("player_name");
let dealerScore = document.querySelector(".dealer-score");
let playerScore = document.querySelector(".player-score");
let hitButton = document.querySelector(".hit");
let standButton = document.querySelector(".stand");
let newGameButton = document.querySelector(".new");
let gameStatus = document.querySelector(".status");
    playerName.innerHTML = "Richard, Bitch";

    hitButton.disabled = true;
    standButton.disabled = true;

let dealerHand 
let userHand 



// BUTTONS -------------------

hitButton.addEventListener("click", () => {

    userHits();
        if (singleDeckGame.isUserBust()) {

            endRound();
            getWinner(singleDeckGame.outcome());
            }
});


standButton.addEventListener("click", () =>{
    singleDeckGame.standUser();

    while (singleDeckGame.isDealerPlaying()) {
        singleDeckGame.settleDealerHand();
        dealerHits();
        }
    getWinner(singleDeckGame.outcome());      
})

    


newGameButton.addEventListener("click", () => {
    newGameButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;
    gameStatus.textContent = "";

    singleDeckGame.resetPlayers();
    singleDeckGame.deal();    

    dealerHand = singleDeckGame.getDealerHand();
    userHand = singleDeckGame.getUserHand();

    dealerScore.textContent = singleDeckGame.evaluateDealer();
    playerScore.textContent = singleDeckGame.evaluateUser();

    document.querySelector(".user").innerHTML = "";
    document.querySelector(".dealer").innerHTML = "";

    Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
    Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));
});

function endRound() {
    hitButton.disabled = true;
    standButton.disabled = true;
    newGameButton.disabled = false;
}

function getWinner(outcome) {
    switch (outcome) {
        case 0:
            hitButton.disabled = true;
            standButton.disabled = true;
            newGameButton.disabled = false;
            gameStatus.textContent = "Dealer Wins!";

            break;
        case 1: 
            hitButton.disabled = true;
            standButton.disabled = true;
            newGameButton.disabled = false;
            gameStatus.textContent = "Draw!";

            break;
        case 2:
            hitButton.disabled = true;
            standButton.disabled = true;
            newGameButton.disabled = false;
            gameStatus.textContent = "You Win!";
}   
}

function userHits() {
    singleDeckGame.hitUser();
    document.querySelector(".user").innerHTML = "";
    Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
    playerScore.innerHTML = singleDeckGame.evaluateUser();
};
function dealerHits() {
    document.querySelector(".dealer").innerHTML = "";
    Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));
    dealerScore.innerHTML = singleDeckGame.evaluateDealer();
}
