const computerChoiceDisplay=document.getElementById("computer-choice");
const userChoiceDisplay=document.getElementById("user-choice");
const result=document.getElementById("result");
const choices=document.querySelectorAll("button");
let userChoice;
choices.forEach(possibleChoice=>possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerText=userChoice
    generateComputerChoice()
}));
function generateComputerChoice(){
    const computerChoice=Math.floor(Math.random() * choices.length)
}