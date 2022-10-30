const choices = ["Rock", "Paper", "Scissor"];

const choiceButtons = document.getElementsByClassName("choice-button");
const playerScoreDiv = document.getElementById("playerScore");
const computerScoreDiv = document.getElementById("computerScore");
const lastResultDiv = document.getElementById("lastResult");

let playerScore = 0;
let computerScore = 0;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getChoiceIndex(choice) {
    return choices.indexOf(capitalize(choice));
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function incrementScore(winner) {
    if (winner === "player") {
        playerScore += 1;
        playerScoreDiv.innerText = playerScore;
    } else if (winner === "computer") {
        computerScore += 1;
        computerScoreDiv.innerText = computerScore;
    } else {
        console.log("Invalid winner received in incrementScore")
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.innerText = "0";
    computerScoreDiv.innerText = "0";
    lastResultDiv.innerText = "";
}

function checkWinner() {
    if (playerScore >= 5) {
        alert("Congrats! You have won.");
        resetGame();
    } else if (computerScore >= 5) {
        alert("Oh no! You lost.");
        resetGame();
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoiceIndex = getChoiceIndex(playerSelection);
    let computerChoiceIndex = getChoiceIndex(computerSelection);

    if (playerChoiceIndex === 0 && computerChoiceIndex === 2) {
        incrementScore("player");
        lastResultDiv.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerChoiceIndex === 2 && computerChoiceIndex === 0) {
        incrementScore("computer");
        lastResultDiv.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerChoiceIndex > computerChoiceIndex) {
        incrementScore("player");
        lastResultDiv.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (computerChoiceIndex > playerChoiceIndex) {
        incrementScore("computer");
        lastResultDiv.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else {
        lastResultDiv.innerText = `Draw! Computer Chose: ${playerSelection}, Player Chose: ${computerSelection}`;
    }

    checkWinner();
}

for (let choiceButton of choiceButtons) {
    choiceButton.addEventListener("click", () => playRound(choiceButton.textContent, getComputerChoice()));
}
