let p1 = 0
let cpu = 0
const buttons = document.querySelectorAll('.choice')
let playerChoice = ''
let computerChoice = ''

for (button of buttons) {

    button.addEventListener('click', (e) => {
        playerChoice = e.target.textContent
        console.log(`P1: ${playerChoice}`)

        getComputerChoice()
        console.log(`CPU: ${computerChoice}`)

        playRound(playerChoice, computerChoice)
    })
}

function getComputerChoice () {

    let computer = document.querySelector('.computer')
    computerChoice = Math.floor(Math.random() * 3) + 1

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

function playRound(playerSelection, computerSelection) {

    let results = document.querySelector('.results')
    let score = document.querySelector('.score')

    if (playerSelection === 'Rock' && computerSelection === 1 || playerSelection === 'Paper' && computerSelection === 2 || playerSelection === 'Scissors' && computerSelection === 3) {
        results.textContent = "IT'S A TIE!"
    } else if (playerSelection === 'Rock' && computerSelection === 2 || playerSelection === 'Paper' && computerSelection === 3 || playerSelection === 'Scissors' && computerSelection === 1) {
        results.textContent = "YOU LOSE!"
        cpu += 1
    } else if (playerSelection === 'Rock' && computerSelection === 3 || playerSelection === 'Paper' && computerSelection === 1 || playerSelection === 'Scissors' && computerSelection === 2) {
        results.textContent = "YOU WIN!"
        p1 += 1
    } else {
        results.textContent = ''
    }

    score.textContent = `CPU: ${cpu} vs P1: ${p1}`

    // First to 5
    if (cpu === 5) {
        console.log("LOSE")
        cpu = 0
        p1 = 0
        score.textContent = 'CPU wins! Try again?'
    } else if (p1 === 5) {
        console.log("WIN")
        cpu = 0
        p1 = 0
        score.textContent = 'You win! Go again?'
    }

}
