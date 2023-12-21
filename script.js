let player = 0;
let computer = 0;
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    const choices = [ "rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    });
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();

    let result = document.querySelector("#result");
    let playerScore = document.querySelector("#playerScore");
    let computerScore = document.querySelector("#computerScore");

    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result.textContent = "You Lose! Paper beats Rock";
            computer += 1;
        }
        else if (computerSelection === "scissor") {
            result.textContent = "You Win! Rock beats Scissor";
            player += 1;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result.textContent = "You Win! Paper beats Rock";
            player += 1;
        }
        else if (computerSelection === "scissor") {
            result.textContent = "You Lose! Scissor beats Paper";
            computer += 1;
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            result.textContent = "You Lose! Rock beats Scissor";
            computer += 1;
        }
        else if (computerSelection === "paper") {
            result.textContent = "You Win! Scissor beats Paper";
            player += 1;
        }
    }

    playerScore.textContent = `Player: ${player}`;
    computerScore.textContent = `Computer: ${computer}`;

    if (player == 5 || computer == 5){
        const div = document.querySelector("div");
        const para = document.createElement("p");

        if (player == 5) para.textContent = "You won the game!";
        else para.textContent = "You lost the game!";

        div.appendChild(para);
        
        disableButtons();
    }

}

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        playRound(button.value);

    });
});