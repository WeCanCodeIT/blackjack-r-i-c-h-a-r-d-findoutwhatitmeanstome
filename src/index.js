const {
    default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");




let playerName = document.getElementById("player-name");
let dealerScore = document.querySelector(".dealer-score");
let playerScore = document.querySelector(".player-score");
let hitButton = document.querySelector(".hit");
let standButton = document.querySelector(".stand");
let doubleButton = document.querySelector(".double");
let newGameButton = document.querySelector(".new");
let gameStatus = document.querySelector(".status");
let playerTokens = document.getElementById("counter")
    playerName.innerHTML = prompt("What's your name?", "Jimmy Olivia Smith")
    gameStatus.innerHTML = `Hit the "New Round" button, ${playerName.innerHTML}`;
    refreshPlayerTokens();
    endRoundButtons();

let dealerHand 
let userHand 







// BUTTONS -------------------

doubleButton.addEventListener("click", () => {
    userDoubles();
        refreshPlayerTokens();
        if (singleDeckGame.isUserBust()) {

            endRound();
            getWinner(singleDeckGame.outcome());
            }
});

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
    startBettingRound();
});



function startNewGameRound() {
    newGameButtons();
    displayToConsole(`${playerName.innerHTML} vs. Dealer`);
    resetGame();
    clearTableHandAreas();
    dealHands();
}

function displayToConsole(input) {
    gameStatus.textContent = input;
}

function resetGame() {
    singleDeckGame.resetPlayers();
    singleDeckGame.deal();
}

function clearScores() {
    dealerScore.textContent = 0;
    playerScore.textContent = 0;
}

function dealHands() {
    dealerHand = singleDeckGame.getDealerHand();
    userHand = singleDeckGame.getUserHand();
    Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
    Dom.renderAnonCard(document.querySelector(".dealer"));
    Dom.renderCards([dealerHand.getCards()[1]], document.querySelector(".dealer"));
}

function clearTableHandAreas() {
    document.querySelector(".user").innerHTML = "";
    document.querySelector(".dealer").innerHTML = "";
}

function startBettingRound() {
    displayToConsole("Place Your Bet");
    clearScores();
    clearTableHandAreas()
    newGameButton.disabled = true;
    Dom.renderTokens([10, 25, 100], document.querySelector(".dealer"));
    document.querySelector(".token.token-10").addEventListener("click", () =>{
        singleDeckGame.receiveAnte(10);
        refreshPlayerTokens()
        startNewGameRound();
        getPlayerScore();
    })
    document.querySelector(".token.token-25").addEventListener("click", () =>{
        singleDeckGame.receiveAnte(25);
        refreshPlayerTokens()
        startNewGameRound();
        getPlayerScore();
    })
    document.querySelector(".token.token-100").addEventListener("click", () =>{
        singleDeckGame.receiveAnte(100);
        refreshPlayerTokens()
        startNewGameRound();
        getPlayerScore();
    })
}

function refreshPlayerTokens() {
    playerTokens.innerHTML = singleDeckGame.getUserChips();
}

function newGameButtons() {
    newGameButton.disabled = true;
    doubleButton.disabled = false;
    hitButton.disabled = false;
    standButton.disabled = false;
}

function endRound() {
    endRoundButtons();
    document.querySelector(".dealer").innerHTML = "";
    Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));
    getDealerScore();
    singleDeckGame.resetAnte();

}

function getDealerScore() {
    dealerScore.innerHTML = singleDeckGame.evaluateDealer();
}
function getPlayerScore() {
    playerScore.innerHTML = singleDeckGame.evaluateUser();
}

function getWinner(outcome) {
    singleDeckGame.outcome();
    
    switch (outcome) {
        case 0:
            endRoundButtons();
            gameStatus.textContent = "Dealer Wins!";

            break;
        case 1: 
            endRoundButtons();
            gameStatus.textContent = "Draw!";

            break;
        case 2:
            endRoundButtons();
            singleDeckGame.userWin();
            gameStatus.textContent = "You Win!";
        }   ;
        refreshPlayerTokens()
        singleDeckGame.resetAnte();
}

function endRoundButtons() {
    hitButton.disabled = true;
    standButton.disabled = true;
    doubleButton.disabled = true;
    newGameButton.disabled = false;
}

function userDoubles() {
    singleDeckGame.doubleUser();
    document.querySelector(".user").innerHTML = "";
    Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
    getPlayerScore();
    
};
function userHits() {
    singleDeckGame.hitUser();
    document.querySelector(".user").innerHTML = "";
    Dom.renderCards(userHand.getCards(), document.querySelector(".user"));
    getPlayerScore();
    
};
function dealerHits() {
    document.querySelector(".dealer").innerHTML = "";
    Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));
    dealerScore.innerHTML = singleDeckGame.evaluateDealer();
}
