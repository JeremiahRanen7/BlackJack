let cards = []
let sum = 0 
let message = document.getElementById("message")
let total = document.getElementById("total")
let cardsReceived = document.getElementById("cards-received")
let hasBlackJack = false
let isAlive = false
let msg = ""

function getRandom(){
    let randomNum = Math.floor(Math.random()*13)+1
    if(randomNum > 10){
        return 10
    }
    else if(randomNum === 1){
        let randomArr = [1,11]
        let randNum = Math.floor(Math.random()*randomArr.length)
        return randomArr[randNum]
    }
    else{
        return randomNum
    }
}

function start(){
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]
    render()
}

function render(){
    cardsReceived.textContent = "Cards Received: "
    for(let i = 0; i < cards.length; i++){
        cardsReceived.textContent += cards[i] + " "
    }

    total.textContent = "Total: " + sum
    if (sum <= 20) {
        msg = "Do you want to draw a new card?"
        message.style.color="blue"
    } else if (sum === 21) {
        msg = "You've got Blackjack!"
        message.style.color="green"
        hasBlackJack = true
    } else {
        msg = "You're out of the game! Start Again!"
        message.style.color="red"
        message.style.textDecoration="underline"
        isAlive = false
    }
    message.textContent = msg
}

function next(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandom()
        cards.push(card)
        sum += card
        render()
    }
}
