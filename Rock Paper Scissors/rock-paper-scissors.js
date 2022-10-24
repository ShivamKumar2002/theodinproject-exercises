const choices = ["Rock", "Paper", "Scissors"];

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getChoiceIndex(choice) {
    return choices.indexOf(capitalize(choice));
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoiceIndex = getChoiceIndex(playerSelection);
    let computerChoiceIndex = getChoiceIndex(computerSelection);

    if (playerChoiceIndex === 0 && computerChoiceIndex === 2) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerChoiceIndex === 2 && computerChoiceIndex === 0) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerChoiceIndex > computerChoiceIndex) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerChoiceIndex > playerChoiceIndex) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `Draw! Computer Chose: ${playerSelection}, Player Chose: ${computerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = capitalize(prompt("What is your choice? Rock, Paper, Scissors?: "));
        if (!choices.includes(playerSelection)) {
            alert("Invalid Choice!");
            i -= 1;
            continue;
        }

        let roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);

        if (roundResult.contains("Win")) {
            playerScore += 1;
        } else if (roundResult.contains("Lose")) {
            computerScore += 1;
        } else {
            // Player and computer both get one point in case of draw
            playerScore += 1;
            computerScore += 1;
        }
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congrats! You Win.")
    } else if (playerScore < computerScore) {
        console.log("Oh No! You Lost.")
    } else {
        console.log("Draw! Excellent Game.")
    }
}
