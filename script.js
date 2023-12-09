function getComputerChoice() {
    const choices = [ "rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`);
    let TIE = true;
    playerSelection = playerSelection.toLowerCase();
    
    while (TIE){
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        }
        else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            }
            else if (computerSelection === "scissor") {
                return "You Win! Rock beats Scissor";
            }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "You Win! Paper beats Rock";
            }
            else if (computerSelection === "scissor") {
                return "You Lose! Scissor beats Paper";
            }
        }
        else if (playerSelection === "scissor") {
            if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissor";
            }
            else if (computerSelection === "paper") {
                return "You Win! Scissor beats Paper";
            }
        }
        TIE = false;
    }
}

function game() {

    let playerSelection = "";
    const choices = [ "rock","paper","scissor"];
    let rounds = 5;
    for (i = 0; i < rounds; i++) {
        //input checker
        do {
            playerSelection = prompt("Rock, Paper, Scissor? (pick one)");
            isAllowed = choices.includes(playerSelection.toLowerCase());
            if (!isAllowed){
                console.log("Wrong choice. Please try again.");
            }
            // console.log(`isAllowed: ${isAllowed}`);
        } while (!isAllowed);
        // console.log(`playerSelection: ${playerSelection}`);
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}

game();
