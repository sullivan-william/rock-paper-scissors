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
    } else {
        document.querySelector('.player').textContent = `Player: ${playerChoice}!`
    }

    return playerChoice
}

function playRound() {
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice()

    console.log(`P1: ${playerSelection}, CPU: ${computerSelection}`)

    if (playerSelection === 'Rock' && computerSelection === 1 || playerSelection === 'Paper' && computerSelection === 2 || playerSelection === 'Scissors' && computerSelection === 3) {
        console.log("TIE")
    } else if (playerSelection === 'Rock' && computerSelection === 2 || playerSelection === 'Paper' && computerSelection === 3 || playerSelection === 'Scissors' && computerSelection === 1) {
        console.log("LOSE")
    } else {
        console.log("WIN")
    }
}