function getComputerChoice() {

    // Generate a random number between 0 and 2, convert to integer and return it
    let randomNumber = parseInt(Math.random()*3);


    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    };
}

let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It is a draw"
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock."
        }
        else {
            playerScore += 1
            return "You win! Rock beats scissors"
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore += 1
            return "You win! Paper beats rock."
        }
        else {
            return "You lose! Scissor beats paper."
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore += 1
            return "You win! Scissors beats paper"
        }
        else {
            return "You lose! Rock beats scissors"
        }
    }

    else {
        return "You didn't select a valid option from the specified options"
    }
}
    
function playGame() {

    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), playerScore)
}

playGame()





