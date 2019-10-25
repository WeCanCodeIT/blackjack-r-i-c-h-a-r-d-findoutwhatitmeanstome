const {
    default: {singleDeckGame}
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");




let playerName = document.getElementById("player_name");
let dealerScore = document.querySelector(".dealer-score");
let playerScore = document.querySelector(".player-score");
let hitButton = document.querySelector(".hit");
let standButton = document.querySelector(".stand");
let newGameButton = document.querySelector(".new");
    playerName.innerHTML = "Richard, Bitch";

    hitButton.disabled = true;
    standButton.disabled = true;

let dealerHand 
let userHand 

// dealerScore.textContent = singleDeckGame.evaluateDealer();
// playerScore.textContent = singleDeckGame.evaluateUser();

// Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
// Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));


// BUTTONS -------------------

hitButton.addEventListener("click", () => {

    userHits();
        if (singleDeckGame.isUserBust()) {

            hitButton.disabled = true;
            standButton.disabled = true;
            newGameButton.disabled = false;

            singleDeckGame.outcome();
            }
});
standButton.addEventListener("click", () =>{

    singleDeckGame.standUser();

    while (singleDeckGame.isDealerPlaying()) {
        singleDeckGame.settleDealerHand();
        dealerHits();
    }
    singleDeckGame.outcome();
    
})

    


newGameButton.addEventListener("click", () => {
    newGameButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;

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
