let rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let info = document.querySelector('#info');
let textWinner = document.querySelector('#winner');

rock.addEventListener('click', () => {playRound('rock');});
paper.addEventListener('click', () => {playRound('paper');});
scissors.addEventListener('click', () => {playRound('scissors');});


function playRound(playerChoice, computerChoice){
    info.innerText = "";
    textWinner.innerText = "";
    winner = null;
    computerChoice = null;
    computerChoice = getComputerChoice();
    if (playerChoice == "rock"){
        switch(computerChoice){
            case "rock":
                winner = "tie game";
                break;
            case "paper":
                winner = "computer";
                break;
            case "scissors":
                winner = "player";
        }
    }
    if (playerChoice == "paper"){
        switch(computerChoice){
            case "rock":
                winner = "player";
                break;
            case "paper":
                winner = "tie game";
                break;
            case "scissors":
                winner = "computer";
        }
    }
    if (playerChoice == "scissors"){
        switch(computerChoice){
            case "rock":
                winner = "computer";
                break;
            case "paper":
                winner = "player";
                break;
            case "scissors":
                winner = "tie game";
        }
    }
    info.innerText = ("Player chose " + playerChoice + " and computer chose " + computerChoice);
    if (winner == "tie game"){
        textWinner.innerText = (winner);
    }
    else{
        textWinner.innerText = (winner + " wins!");
    }

}

function getComputerChoice(){
    randNum = Math.floor(Math.random()*3);
    choice = null;
    
    if(randNum == 0)
    {
        choice = "rock";
    }
    if(randNum == 1)
    {
        choice = "paper";
    }
    if(randNum == 2)
    {
        choice = "scissors";
    }
    return choice;
}

function alertFunction(){
    alert("testing testing! you clicked on " + this.id);
}