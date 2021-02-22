window.addEventListener("DOMContentLoaded", function(){
    console.log("Content Loaded");

    let deckCards = ["ace",2, 3 ,4, 5 ,6 ,7, 8 ,9, 10, "jack", "queen", "king"];
    let cardTypes = ["clubs", "hearts", "spades", "diamonds"];
    console.log(deckCards);
    console.log(cardTypes);

    deckCards.forEach(function(deckCard){
        // console.log(deckCard + " of");
        cardTypes.forEach(function(cardType){
            console.log(deckCard + " of " + cardType);
        });
    });
});