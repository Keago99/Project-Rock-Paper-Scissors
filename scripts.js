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
    if (playerSelection === "rock"){
        switch(ComputerSelection){
            case "rock":
                console.log("PR, CR draw game");
                break;
            case "paper":
                console.log("PR, CP computer wins!");
                break;
            case "scissors":
                console.log("PR, CS player wins!");
        }

    }
    if (playerSelection === "paper"){
        switch(ComputerSelection){
            case "rock":
                console.log("PP, CR player wins!");
                break;
            case "paper":
                console.log("PP, CP draw game");
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
}