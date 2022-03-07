const computerChoiceDisplay=document.getElementById("computer-choice");
const userChoiceDisplay=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");
const choices=document.querySelectorAll("button");
let userChoice;
let result;

choices.forEach(possibleChoice=>possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}));
function generateComputerChoice(){
    const randomNum=Math.floor(Math.random() * (choices.length+1))
    if(randomNum === 1){
        computerChoice= "rock"
    }
    else if (randomNum=== 2){
        computerChoice= 'paper'
    }
    else if (randomNum === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML=computerChoice
}
function getResult(){
    if ((userChoice=='rock'&& computerChoice == 'scissors')
    ||(userChoice =='paper'&& computerChoice=='rock')
    ||(userChoice =='scissors'&& computerChoice=='paper')){
        result = "You Won"
    }
    else if ((computerChoice=='rock'&& userChoice == 'scissors')
    ||(computerChoice =='paper'&& userChoice=='rock')
    ||(computerChoice =='scissors'&& userChoice=='paper')){
        result = "You Lost"
    }
    else if (computerChoice===userChoice){
        result = "It's a Tie"
    }
    resultDisplay.innerHTML=result
}
