let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
        })
})

function cardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
    card1valueIndex = valueOptions.indexOf(card1.value)
    card2valueIndex = valueOptions.indexOf(card2.value)

    if (card1valueIndex === card2valueIndex) {
        console.log("It's a tie") 
    } else if (card1valueIndex > card2valueIndex) {
        console.log("Card 1 is the winner") 
    } else {
        console.log("Card 2 is the winner")
    }
}

const card1Obj = {
    value: "7"
}
const card2Obj = {
    value: "KING"
}

cardWinner(card1Obj, card2Obj)