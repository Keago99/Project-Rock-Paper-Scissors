function getComputerChoice(){
    randNum = Math.floor(Math.random()*3);
    choice = null;
    
    if(randNum == 0)
    {
        choice = "Rock";
    }
    if(randNum == 1)
    {
        choice = "Paper";
    }
    if(randNum == 2)
    {
        choice = "Scissors";
    }
    console.log(choice);
    return choice;
}