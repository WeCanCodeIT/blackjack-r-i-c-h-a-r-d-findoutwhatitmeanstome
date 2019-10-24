module.exports = {
    
    generateCard(card) {
        const playingCard = document.createElement("section");
        playingCard.classList.add("playing-card");
        
        const valueContainer = document.createElement("section");
        valueContainer.classList.add("card-inner-line");

        const value = document.createElement("span");
        value.classList.add("card-value-display");
        value.textContent = card.getValue();

        const suit = document.createElement("span");
        suit.classList.add("suit");
        suit.textContent = card.getSuit();

        valueContainer.append(value);
        valueContainer.append(suit);
        playingCard.append(valueContainer);

        return playingCard;
    },
    renderCards(cardsArray, containerElement) {
        cardsArray.forEach(card => {
            containerElement.append(this.generateCard(card));
        })
    },
    renderDealerCard(dealerCard, containerElement) {
        containerElement.append(this.generateCard(dealerCard))
        }
};
