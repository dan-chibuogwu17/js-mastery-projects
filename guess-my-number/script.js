'use strict';

let message = document.querySelector('.message');
const randomNumberElement = document.querySelector('.number');
const check = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const playAgain = document.querySelector('.again');
let highScoreElement = document.querySelector('.highscore');
let displayScore = document.querySelector('.score');

// Initial Values
let score = 20;
let highScore = 0;
displayContent(displayScore, score);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
displayContent(message, 'Start guessing...');

// Handlers
function displayContent(element, content) {
  return (element.textContent = content);
}
function checkGuess() {
  const guess = Number(guessInput.value);

  // when there is no input
  if (!guess) {
    displayContent(message, '⛔️ No Input Number');

    //when the player wins
  } else if (guess === secretNumber) {
    displayContent(randomNumberElement, secretNumber);
    displayContent(message, '🎉 correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    randomNumberElement.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      displayContent(highScoreElement, score);
    }

    // when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent(
        message,
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );

      score--;
      displayContent(displayScore, score);
    } else {
      displayContent(message, '💥 You lost the game!');
      displayContent(displayScore, 0);
    }
  }
}
// The Play again button functionality
const again = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guessInput.value = '';
  displayContent(displayScore, score);
  displayContent(randomNumberElement, '?');
  displayContent(message, 'Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  randomNumberElement.style.width = '15rem';
};

// event handlers for playing again and checking answer
check.addEventListener('click', checkGuess);
playAgain.addEventListener('click', again);
