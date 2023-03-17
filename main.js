function getComputerChoice () {
    let computer = document.querySelector('.computer')
    let computerSelection = Math.floor(Math.random() * 3) + 1
    console.log(computerSelection)

    if (computerSelection === 1) {
        computer.textContent = "CPU: Rock!"
    } else if (computerSelection === 2) {
        computer.textContent = "CPU: Paper!"
    } else if (computerSelection === 3) {
        computer.textContent = "CPU: Scissors!"
    } else {
        computer.textContent = "ERROR"
    }
}

function getPlayerChoice() {
    let playerSelection = document.getElementById("player").value.toLowerCase()
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    document.querySelector('.player').textContent = `Player: ${playerSelection}!`
}

const computerSelection = getComputerChoice()