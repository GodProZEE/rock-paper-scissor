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
        return "It is a draw."
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore += 1
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
    
function playGame() {

    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), "Player:", playerSelection+ ",", "Computer:", computerSelection + ",", "Player score:", playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), "Player:", playerSelection+ ",", "Computer:", computerSelection + ",", "Player score:", playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), "Player:", playerSelection+ ",", "Computer:", computerSelection + ",", "Player score:", playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), "Player:", playerSelection+ ",", "Computer:", computerSelection + ",", "Player score:", playerScore)
    var playerSelection = prompt("Please enter your selection").toLowerCase()
    var computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection), "Player:", playerSelection+ ",", "Computer:", computerSelection + ",", "Player score:", playerScore)

    if (playerScore > 2) {
        console.log("You win overall! :)")
    }
    else {
        console.log("You lose overall :(") 
    }
}

playGame()





