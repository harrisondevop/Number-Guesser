# Number Guesser Game

## Overview

The Number Guesser Game is a simple web-based game where the player has to guess a randomly generated secret number between 1 and 100. The player has 10 attempts to guess the number, with feedback provided after each guess.

## Features

- Random number generation between 1 and 100.
- User input for guesses via a graphical user interface.
- Feedback after each guess indicating if the guess is too high, too low, or correct.
- Win/Loss conditions based on the number of attempts.
- Display of the number of remaining attempts.
- Responsive design for compatibility with various devices.

## How to Use

1. Open the `index.html` file in a web browser. or simply click this link to access the application on github pages
2. Enter your guess in the input field.
3. Click the "Submit Guess" button.
4. Receive feedback on whether your guess is too high, too low, or correct.
5. Continue guessing until you win or run out of attempts.

## Running Tests

Tests are written using Jasmine. To run the tests, open the `SpecRunner.html` file in a web browser.

## Code Structure

- `index.html`: Contains the HTML structure of the game.
- `styles.css`: Contains the CSS for styling the game.
- `script.js`: Contains the JavaScript logic for the game.
- `README.md`: This file, providing an overview and instructions.

## Best Practices

- Input validation is implemented to ensure guesses are within the valid range.
- Feedback is displayed on the UI without using `alert`.
- Code is modular and documented for maintainability.
- The design is responsive to ensure compatibility with various devices.
