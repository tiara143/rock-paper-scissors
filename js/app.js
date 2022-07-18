const intro = document.querySelector('#intro')
const pick = document.querySelector('#pick')
const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
const gameGrid = document.querySelector('.game')
let userChoice
let computerChoice

const choices = ['rock', 'paper', 'scissors']

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    intro.innerHTML = ""
    pick.innerHTML = ""
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'Your Choice: ' + userChoice
    generateComputerChoice()
    getResult()
}))

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer Choice: ' + computerChoice
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "You Win!"
            resultDisplay.style.color = "#697a21"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "You Lose!"
            resultDisplay.style.color = "#dd403a"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "It's a draw!"
            resultDisplay.style.color = "#d4ac0c";
            break
    }
}

