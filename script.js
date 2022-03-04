// Declare the only 3 posible choices, rock paper and sissors
const choices =["rock", "paper", "sissors"];
const winners =[];
//Declare a function that plays the game
function game(){
    for (let i=0; i<5; i++){
        playRound(i);
    }
    logwins()
}