import main from "./js/main";
main()
import DeckGenerator from 'playing-card-deck-generator';

let playerName = document.getElementById("player_name")
let cardContent = document.getElementsByClassName("card-value-display")
playerName.innerHTML = prompt("What's your name you sick piece of shit?", "Ivana Lose")

cardContent.innerHTML = DeckGenerator.generate([1],[2]);
