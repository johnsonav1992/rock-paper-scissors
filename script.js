//Initialize Score variables
let playerScore = 0;
let computerScore = 0;

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

    //Play Again
    playAgainButton.addEventListener('click', () => {
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
    })

}



//Play Match
function playMatch() {

    //Reset Scores
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = '0'
    computerScoreText.textContent = '0'

    //computer options
    const computerOptions = ["rock", "paper", "scissors"]

    handImages.forEach(hand => {
        hand.addEventListener('animationend', e => {
            e.target.style.animation = ''
        })
    })

    //When player clicks an option
    optionButtons.forEach(option => {
        option.addEventListener('click', e => {
            
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
        })
    })
    
}

//Compare Hands
function compareHands(playerChoice, computerChoice) {
    //Tie
    if (playerChoice === computerChoice) {
        winnerMessage.textContent = "It's a draw!"
        return
    }

    //Rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            winnerMessage.textContent = "Player Wins!"
            playerScore++
            console.log(`player: ${playerScore}`)
            roundWinCheck(playerScore, computerScore)
            updateScore()
            return
        } else {
            winnerMessage.textContent = "Computer Wins!"
            computerScore++
            console.log(`computer: ${computerScore}`)
            roundWinCheck(playerScore, computerScore)
            updateScore()
            return
        }
    }

    //Paper
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            winnerMessage.textContent = "Player Wins!"
            playerScore++
            console.log(`player: ${playerScore}`)
            roundWinCheck(playerScore, computerScore)
            updateScore()
            return
        } else {
            winnerMessage.textContent = "Computer Wins!"
            computerScore++
            console.log(`computer: ${computerScore}`)
            roundWinCheck(playerScore, computerScore)
            updateScore()
            return
        }
    }

    //Scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            winnerMessage.textContent = "Player Wins!"
            playerScore++
            console.log(`player: ${playerScore}`)
            roundWinCheck(playerScore, computerScore)
            updateScore()
            return
        } else {
            winnerMessage.textContent = "Computer Wins!"
            computerScore++
            console.log(`computer: ${computerScore}`)
            roundWinCheck(playerScore, computerScore)
            updateScore()
            return
        }
    }
    
    
    
}

//Update Score
function updateScore() {
    playerScoreText.textContent = playerScore
    computerScoreText.textContent = computerScore
    return
}

//Check for Winning Round
function roundWinCheck(playerScore, computerScore) {
    if (playerScore === 3) {
        endGame()
        finalWinnerMessage.textContent = 'You won the match!'
    } else if (computerScore === 3) {
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

//Restart Game
// function restartGame() {
//     introScreen.classList.remove('show')
//     match.classList.add('show')
//     match.classList.remove('hide')
//     endGameScreen.classList.remove('show')
//     endGameScreen.classList.add('hide')

//     //reset hand images and message text
//     winnerMessage.textContent = 'Choose an Option'
//     playerHand.src = `./assets/rock.png`
//     computerHand.src = `./assets/rock.png`

//     //Reset Scores
//     playerScore = 0
//     computerScore = 0
//     playerScoreText.textContent = playerScore
//     computerScoreText.textContent = computerScore

//     console.log(playerScore)
//     console.log(computerScore)
        
//     //start new round
//     playMatch()
// }
