let p1 = 0
let cpu = 0


function getComputerChoice () {
    let computer = document.querySelector('.computer')
    let computerChoice = Math.floor(Math.random() * 3) + 1

    if (computerChoice === 1) {
        computer.textContent = "CPU: Rock!"
    } else if (computerChoice === 2) {
        computer.textContent = "CPU: Paper!"
    } else if (computerChoice === 3) {
        computer.textContent = "CPU: Scissors!"
    } else {
        computer.textContent = "ERROR"
    }

    return computerChoice
}

function getPlayerChoice() {
    let playerChoice = document.getElementById("player").value.toLowerCase()
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)

    if (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
        document.querySelector('.player').textContent = `Player: Please choose a valid option`
        document.querySelector('.results').textContent = ''
    } else {
        document.querySelector('.player').textContent = `Player: ${playerChoice}!`
    }

    return playerChoice
}

function playRound() {
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice()

    if (playerSelection === 'Rock' && computerSelection === 1 || playerSelection === 'Paper' && computerSelection === 2 || playerSelection === 'Scissors' && computerSelection === 3) {
        document.querySelector('.results').textContent = "IT'S A TIE!"
    } else if (playerSelection === 'Rock' && computerSelection === 2 || playerSelection === 'Paper' && computerSelection === 3 || playerSelection === 'Scissors' && computerSelection === 1) {
        document.querySelector('.results').textContent = "YOU LOSE!"
        cpu += 1
        document.querySelector('.score').textContent = `CPU: ${cpu} vs P1: ${p1}`
    } else if (playerSelection === 'Rock' && computerSelection === 3 || playerSelection === 'Paper' && computerSelection === 1 || playerSelection === 'Scissors' && computerSelection === 2) {
        document.querySelector('.results').textContent = "YOU WIN!"
        p1 += 1
        document.querySelector('.score').textContent = `CPU: ${cpu} vs P1: ${p1}`
    } else {
        document.querySelector('.results').textContent = ''
    }

    // Best of 5
    if (cpu === 3) {
        console.log("LOSE")
        cpu = 0
        p1 = 0
        document.querySelector('.score').textContent = 'CPU wins! Try again?'
    } else if (p1 === 3) {
        console.log("WIN")
        cpu = 0
        p1 = 0
        document.querySelector('.score').textContent = 'You win! Go again?'
    }

}
