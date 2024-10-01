const choices = ["rock", "paper", "scissors"]
const initialHumanScore = 0;
const initialComputerScore = 0;
let roundCount = 0;

const computerChoice = document.querySelector(".computer-choice")
const humanChoice = document.querySelector(".human-choice")
const gameOptions = document.querySelector(".game-options")
const computerScore = document.querySelector(".computer-score .score")
const humanScore = document.querySelector(".human-score .score")
const result = document.querySelector(".result")
computerScore.textContent = initialComputerScore
humanScore.textContent = initialHumanScore



function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice
}



gameOptions.addEventListener("click", (event) => {
    const selectedOption = event.target.id
    humanChoice.textContent = selectedOption
    computerChoice.textContent = getComputerChoice()
    if (roundCount <= 5) {
        playRound(humanChoice.textContent, computerChoice.textContent)
    } else {
        EndGame()
    }

})


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerChoice.textContent++
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore.textContent++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore.textContent++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore.textContent++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore.textContent++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore.textContent++
    }
    roundCount++
}


function reset() {
    humanScore.textContent = 0
    computerScore.textContent = 0
    humanChoice.textContent = ""
    computerChoice.textContent = ""
    roundCount = 0
    setTimeout(() => {

        result.textContent = ""
    }, [2000])
}


function EndGame() {
    if (humanScore.textContent > computerScore.textContent) {
        result.textContent = "You Won !"
        reset()
    } else if (humanScore.textContent < computerScore.textContent) {
        result.textContent = "Computer Won !"
        reset()
    } else {
        result.textContent = "Match , Neither of You Won!"
        reset()
    }
}

















