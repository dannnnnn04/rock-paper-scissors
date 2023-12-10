function getComputerChoice() {
    const choices = [ "rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`);
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return;
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You Lose! Paper beats Rock");
            return "c";
        }
        else if (computerSelection === "scissor") {
            console.log("You Win! Rock beats Scissor");
            return "p";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win! Paper beats Rock");
            return "p";
        }
        else if (computerSelection === "scissor") {
            console.log("You Lose! Scissor beats Paper");
            return "c";
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            console.log("You Lose! Rock beats Scissor");
            return "c";
        }
        else if (computerSelection === "paper") {
            console.log("You Win! Scissor beats Paper");
            return "p";
        }
    }

}

function game() {

    let playerSelection = "";
    const choices = [ "rock","paper","scissor"];
    let rounds = 5;

    let player = 0;
    let computer = 0;
    let winner = "";

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

        winner = playRound(playerSelection, computerSelection);

        if (winner === "p") {
            player += 1;
        }
        else if (winner === "c") {
            computer += 1;
        }
        else {
            rounds += 1;
        }
    }

    //figure out the winner
    if (player > computer){
        console.log("Congratulations!! You won!");
    }
    else {
        console.log("Better luck next time!");
    }

    console.log(`Final score:\n You: ${player}, Computer: ${computer}`);

}

game();
