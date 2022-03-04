// Declare the only 3 posible choices, rock paper and sissors
const choices =["rock", "paper", "scissors"];
const winners =[];
//Declare a function that plays the game and plays 5 rounds
function game(){
    for (let i=1; i<6; i++){
        playRound(i);
    }
    logWins();
    document.querySelector("button").textContent="Play Game Again";
}
// declare a function that plays a round
function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner= checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}
// declare a function that takes the player choice
function playerChoice(){
    let input = prompt("Type either rock, paper or scissors");
    input= input.toLowerCase();
    let check = validateInput(input);
    if(check==false){
        input = prompt("Please enter a correct spelling of rock, paper or scissors");
    }
    else if (check==null){
        input= prompt("You have to enter a value!")

    }
    else {checkWinner();
    }
    return input;
}

// declare a function that playes computer choice randomly
function computerChoice(){
    const choices =["rock", "paper", "scissors"];
    return choices[Math.floor((Math.random()) * choices.length)];
}
// function that validates the input
function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    } 
    else{
        return false;
    }
}
// declare another function to check winner
function checkWinner(choicePlay, choiceComp){
    if (choicePlay===choiceComp){
        return "Tie";
    }
    else if ((choicePlay=== "rock" && choiceComp==="scissors") ||
    (choicePlay==="paper" && choiceComp ==="rock") ||
    (choicePlay ==="scissors" && choiceComp==="paper")){
        return "Player";
    }
    else{
        return "Computer";
    }
}
// declare another function to log or display wins
function logWins(){
    let playerWins=winners.filter((item)=>item=="Player").length;
    let computerWins=winners.filter((item)=>item == "Computer").length;
    let ties = winners.filter((item) =>item == "Tie").length;
    console.log("Results");
    console.log("Player wins", playerWins);
    console.log("Computer wins", computerWins);
    console.log("It's a Tie", ties);
}
// declare another function that displays the round
function logRound(playerChoice, computerChoice, winner, round){
    console.log("Player chose", playerChoice);
    console.log("Computer chose", computerChoice);
    console.log(winner, "Won the round");
    console.log("Round", round);
    console.log("-----------------------")
}
game()