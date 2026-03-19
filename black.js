/*B;ack Jack Game */

let firstCard = 10;
let secondCard = 11;
let message = "";
let hasBlackJack = false;
let isAlive = true;
let messageEL = document.getElementById("message-el")
let sum = firstCard + secondCard;
let sumEL = document.getElementById("sum-el")


function startGame(){
    sumEL.textContent = sum
    messageEL.textContent = message

    if(sum <= 20){
       message = "Want to pick another card? 👌"
   } else if(sum ===21){
       message = "Congs! You've got BlackJack 👍"
   } else {
       message = "You're out of the game"
       isAlive = false
   }

}   