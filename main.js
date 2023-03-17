function getComputerChoice () {
    let computer = document.querySelector('.computer')
    let computerChoice = Math.floor(Math.random() * 3) + 1
    console.log(computerChoice)

    if (computerChoice === 1) {
        computer.textContent = "CPU: Rock!"
    } else if (computerChoice === 2) {
        computer.textContent = "CPU: Paper!"
    } else if (computerChoice === 3) {
        computer.textContent = "CPU: Scissors!"
    } else {
        computer.textContent = "ERROR"
    }
}

function getPlayerChoice() {
    let playerChoice = document.getElementById("player").value.toLowerCase()
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)

    if (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
        document.querySelector('.player').textContent = `Player: Please choose a valid option`
        console.log(playerChoice)
    } else {
        document.querySelector('.player').textContent = `Player: ${playerChoice}!`
        console.log(playerChoice)
    }

    getComputerChoice()
}