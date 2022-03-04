// Declare the only 3 posible choices, rock paper and sissors
let choices =["rock", "paper", "sissors"];
const winners =[];
//Declare a function that plays the game and plays 5 rounds
function game(){
    for (let i=1; i<=5; i++){
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
    return choices[Math.floor((Math.random) * choices.length)];
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
        return "It's a tie";
    }
    else if ((choicePlay==="rock" && choiceComp=="scissors") ||
    (choicePlay==="paper" && choiceComp =="rock") ||
    (choicePlay ==="scissors" && choiceComp=="paper")){
        return "Player wins";
    }
    else{
        return "Computer wins";
    }
}
// declare another function to log or display wins
function logWins(){
    let playerWins=winners.filter((item)=>item=="Player wins").length;
    let computerWins=winners.filter((item)=>item == "Computer wins").length;
    let ties = winners.filter((item) =>item == "It's a tie").length;
    console.log("Results");
    console.log("Player wins", playerWins);
    console.log("Computer wins", computerWins);
    console.log("It's a tie", ties);
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