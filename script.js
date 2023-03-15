//Initialize Score variables
const scores = {
    playerScore:  0,
    computerScore: 0
}

// Select all elements 
const introScreen = document.querySelector('.intro-screen')
const playButton = document.querySelector('.play-button')
const playAgainButton = document.querySelector('.play-again-button')
const match = document.querySelector('.match')
const optionButtons = document.querySelectorAll('.options button')
const playerHand = document.querySelector('.player-hand')
const computerHand = document.querySelector('.computer-hand')
const winnerMessage = document.querySelector('.winner-message')
const finalWinnerMessage = document.querySelector('.final-winner')
let playerScoreText = document.querySelector('.player-score p')
let computerScoreText = document.querySelector('.computer-score p')
const handImages = document.querySelectorAll('.hands img')
const endGameScreen = document.querySelector('.end-game-screen')

//Call Start Game
startGame() 

//Start Game
function startGame() {
    playButton.addEventListener('click', () => {
        introScreen.classList.remove('show')
        introScreen.classList.add('hide')
        match.classList.add('show')
        match.classList.remove('hide')
        playMatch()
    })

}

 //Play Again
 function playAgain() {
    scores.playerScore = 0
    scores.computerScore = 0
    endGameScreen.classList.add('hide')
    endGameScreen.classList.remove('show')
    introScreen.classList.remove('show')
    introScreen.classList.add('hide')
    match.classList.add('show')
    match.classList.remove('hide')

    //reset hand images and message text
    winnerMessage.textContent = 'Choose an Option'
    playerHand.src = `./assets/rock.png`
    computerHand.src = `./assets/rock.png`

    playMatch()
}


function handleOptionClick(e) {
    console.log('option clicked')    

    //computer options
    const computerOptions = ["rock", "paper", "scissors"]
    const computerNum = Math.floor(Math.random() * 3)
    const computerChoice = computerOptions[computerNum]

    let playerChoice = e.target.textContent
    playerChoice = playerChoice.toLowerCase()

    
    //Match result delayed after animation
    setTimeout(() => {
        compareHands(playerChoice, computerChoice)

        //update images
        playerHand.src = `./assets/${playerChoice}.png`
        computerHand.src = `./assets/${computerChoice}.png`

    }, 2000);
    
    //Animation
    playerHand.style.animation = 'shakePlayerHand 2s ease'
    computerHand.style.animation = 'shakeComputerHand 2s ease'

    //Reset to rock hands for next round
    playerHand.src = `./assets/rock.png`
    computerHand.src = `./assets/rock.png`
}

//Play Match
function playMatch() {

    //Reset Scores
    playerScoreText.textContent = '0'
    computerScoreText.textContent = '0'

    // Remove old event listeners so buttons don't get clicked twice!!
    optionButtons.forEach(option => {
        option.removeEventListener('click', handleOptionClick)
    })

    optionButtons.forEach(option => {
        option.addEventListener('click', handleOptionClick)
    })
    
    handImages.forEach(hand => {
        hand.addEventListener('animationend', e => {
            e.target.style.animation = ''
        })
    })
}

//Compare Hands
function compareHands(playerChoice, computerChoice) {
    console.log('comparing hands', {playerChoice, computerChoice})
    //Tie
    if (playerChoice === computerChoice) {
        winnerMessage.textContent = "It's a draw!"
        return
    }

    //Rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            winnerMessage.textContent = "Player Wins!"
            scores.playerScore++
            roundWinCheck(scores)
            updateScore(scores)
            return
        } else {
            winnerMessage.textContent = "Computer Wins!"
            scores.computerScore++
            roundWinCheck(scores)
            updateScore(scores)
            return
        }
    }

    //Paper
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            winnerMessage.textContent = "Player Wins!"
            scores.playerScore++
            roundWinCheck(scores)
            updateScore(scores)
            return
        } else {
            winnerMessage.textContent = "Computer Wins!"
            scores.computerScore++
            roundWinCheck(scores)
            updateScore(scores)
            return
        }
    }

    //Scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            winnerMessage.textContent = "Player Wins!"
            scores.playerScore++
            roundWinCheck(scores)
            updateScore(scores)
            return
        } else {
            winnerMessage.textContent = "Computer Wins!"
            scores.computerScore++
            roundWinCheck(scores)
            updateScore(scores)
            return
        }
    }
    
    
    
}

//Update Score
function updateScore(scores) {
    playerScoreText.textContent = scores.playerScore
    computerScoreText.textContent = scores.computerScore
    return
}

//Check for Winning Round
function roundWinCheck(scores) {
    if (scores.playerScore === 3) {
        endGame()
        finalWinnerMessage.textContent = 'You won the match!'
    } else if (scores.computerScore === 3) {
        endGame()
        finalWinnerMessage.textContent = 'Computer won the match...Sorry!'
    }
}

//End Game
function endGame() {
    endGameScreen.classList.add('show')
    endGameScreen.classList.remove('hide')
    match.classList.remove('show')
    match.classList.add('hide')

}

playAgainButton.addEventListener('click', playAgain)


