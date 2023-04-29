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