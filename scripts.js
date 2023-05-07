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

function playerChoice(){
    let correctChoice = false;
    while(correctChoice === false)
    {
        let pChoice = prompt("Rock, paper or scissors?")
        if(pChoice.toLowerCase() === "rock"){
            return pChoice.toLowerCase();
        }
        else if(pChoice.toLowerCase() === "paper"){
            return pChoice.toLowerCase();
        }
        else if(pChoice.toLowerCase() === "scissors"){
            return pChoice.toLowerCase();
        } 
        console.log("You entered an invalid option, ");
    }
}

function playRound(playerSelection, ComputerSelection){
    let winner = null;
    if (playerSelection === "rock"){
        switch(ComputerSelection){
            case "rock":
                winner = "draw";
                break;
            case "paper":
                winner = "computer"
                break;
            case "scissors":
                winner = "player"
        }
    }
    if (playerSelection === "paper"){
        switch(ComputerSelection){
            case "rock":
                winner = "player";
                break;
            case "paper":
                winner = "draw";
                break;
            case "scissors":
                console.log("PP, CS computer wins!");
        }
    }
    if (playerSelection === "scissors" )
    switch(ComputerSelection){
        case "rock":
            console.log(" PS, CR computer wins!");
            break;
        case "paper":
            console.log(" PS, CP player wins!");
            break;
        case "scissors":
            console.log(" PS, CS draw game");
    }
    console.log("Player chose " + playerSelection + " computer chose " + ComputerSelection + ".");
    if (winner === "draw"){
        console.log("Draw game!")
        return winner;
    }
    else{
        console.log(winner + " wins!");
        return winner;
    }
}