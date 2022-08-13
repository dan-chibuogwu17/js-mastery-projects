'use strict';
// document.querySelector('.message').textContent = '🎉 correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 17;

// document.querySelector('.guess').value = 23;

let message = document.querySelector('.message');
const randomNumberElement = document.querySelector('.number');
const check = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
let displayScore = document.querySelector('.score');
let score = 20;
displayScore.textContent = score;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
randomNumberElement.textContent = secretNumber;

check.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  // when there is no input
  if (!guess) {
    message.textContent = '⛔️ No Input Number';

    //when the player wins
  } else if (guess === secretNumber) {
    message.textContent = '🎉 correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    randomNumberElement.style.width = '30rem';

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      displayScore.textContent = score;
    } else {
      message.textContent = 'Oops! You lost the game.';
      displayScore.textContent = 0;
    }

    // when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      displayScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      displayScore.textContent = 0;
    }
  }
});
