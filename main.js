function getComputerChoice () {
    let computer = document.querySelector('.computer')
    let computerSelection = Math.floor(Math.random() * 3) + 1
    console.log(computerSelection)

    if (computerSelection === 1) {
        computer.textContent = "Rock!"
    } else if (computerSelection === 2) {
        computer.textContent = "Paper!"
    } else if (computerSelection === 3) {
        computer.textContent = "Scissors!"
    } else {
        computer.textContent = "ERROR"
    }
}

getComputerChoice()