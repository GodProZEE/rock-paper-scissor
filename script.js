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
let computerScore = 0;
let playerSelection = ''
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
        return 'win'
    }
    else {
        computerScore += 1
        return `lose`
    }
}

const allButtons = document.querySelectorAll('button');
allButtons.forEach((currentButton) => {
    currentButton.addEventListener('click', (event) => {
        textDiv = document.querySelector('.currentResult')
        if (computerScore === 5) {
            textDiv.textContent = 'Uhhh sorry to say but uhhh you kinda lost'
        } else if (playerScore === 5) {
            textDiv.textContent = "OK great, you won, be proud of yourself"
        } else {
            
            allButtons.forEach((myButton) => {
                myButton.classList.remove("shadowClass")
            })

            textDiv = document.querySelector('.currentResult')
            textDiv.textContent = ''
            switch (event.target.id) {
                case 'rockBtn':
                    playerSelection = 'rock';
                    break;
                case 'paperBtn':
                    playerSelection = 'paper';
                    break;
                case 'scissorsBtn':
                    playerSelection = 'scissors';
                    break;
            }
            var compSel = getComputerChoice()

            
            const compText = document.createElement('p') 
            const playerText = document.createElement('p')
            const matchResult = document.createElement('p')
            const scoresDiv = document.querySelector(".scoresDiv")
            scoresDiv.textContent = ''
            let scores = document.createElement('p')

            compText.textContent = `Computer chose: ${compSel}`
            playerText.textContent = `Player chose: ${playerSelection}`

            textDiv.appendChild(compText)
            textDiv.appendChild(playerText)
            let playResult = playRound(playerSelection, compSel)
            if (playResult === 'win') {
                matchResult.textContent = `You win! ${playerSelection} beats ${compSel}`
            } else if (playResult === 'lose') {
                matchResult.textContent = `You lose! ${compSel} beats ${playerSelection}`
            } else {
                matchResult.textContent = `Oh great, that's a draw`
            }

            textDiv.appendChild(matchResult)
            scores.textContent = `Your score is: ${playerScore}. Computer score is ${computerScore}`
            scoresDiv.appendChild(scores)
            event.target.classList.add("shadowClass")
        }
            

        }
    )
})
