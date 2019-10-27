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
    generateAnonCard() {
        const playingCard = document.createElement("section");
        playingCard.classList.add("playing-card");
        
        const valueContainer = document.createElement("section");
        valueContainer.classList.add("card-inner-line_anon");

        playingCard.append(valueContainer);

        return playingCard;
    },
    renderAnonCard(containerElement){
        containerElement.append(this.generateAnonCard());
    },
   
    generateToken(token) {
        const bettingToken = document.createElement("section");
        bettingToken.classList.add("token");
        
        
        const valueContainer = document.createElement("section");
        valueContainer.classList.add("token-value-container");

        const value = document.createElement("span");
        value.classList.add("token-value")

        switch(token){
            case 10:
                bettingToken.classList.add("token-10");
                valueContainer.classList.add("token-10");
                value.innerText = "10";
                break;

            case 25:
                bettingToken.classList.add("token-25");
                valueContainer.classList.add("token-25");
                value.innerText = "25";
                break;
            case 100:
                bettingToken.classList.add("token-100");
                valueContainer.classList.add("token-100");
                value.innerText = "100";
                break;
                
        }

        valueContainer.append(value);
        bettingToken.append(valueContainer);

        return bettingToken;
    },

    renderTokens(tokensArray, containerElement) {
        tokensArray.forEach(token => {
            containerElement.append(this.generateToken(token));
        })
    }

};
