document.addEventListener("DOMContentLoaded", () => {
  const secretNumber = generateSecretNumber();
  let attemptsLeft = 10;

  const guessInput = document.getElementById("guessInput");
  const submitGuess = document.getElementById("submitGuess");
  const feedback = document.getElementById("feedback");
  const attemptsLeftDisplay = document.getElementById("attemptsLeft");
  const gameResult = document.getElementById("gameResult");

  attemptsLeftDisplay.textContent = `Attempts left: ${attemptsLeft}`;

  submitGuess.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      feedback.textContent = "Please enter a valid number between 1 and 100.";
      feedback.style.color = "red";
      return;
    }

    attemptsLeft--;
    attemptsLeftDisplay.textContent = `Attempts left: ${attemptsLeft}`;

    if (userGuess === secretNumber) {
      feedback.textContent = "Congratulations! You guessed the number!";
      feedback.style.color = "green";
      submitGuess.disabled = true;
      gameResult.textContent = `The secret number was ${secretNumber}.`;
    } else if (userGuess > secretNumber) {
      feedback.textContent = "Too high!";
      feedback.style.color = "orange";
    } else {
      feedback.textContent = "Too low!";
      feedback.style.color = "orange";
    }

    if (attemptsLeft === 0 && userGuess !== secretNumber) {
      feedback.textContent = "Game over! You've run out of attempts.";
      feedback.style.color = "red";
      gameResult.textContent = `The secret number was ${secretNumber}.`;
      submitGuess.disabled = true;
    }
  });

  /**
   * Generates a random number between 1 and 100.
   * @returns {number} The secret number.
   */
  function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
});
