function getComputerChoice() {
    const choices = [ "rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`);
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

const playerSelection = "rock";
// const playerSelection = "paper";
// const playerSelection = "scissor";

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
