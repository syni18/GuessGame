let guessTurn = 1;
let resetButton;

const code = document.querySelector(".pcode");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const btn = document.querySelector(".btn");

resetButton = document.createElement("button");
resetButton.textContent = "Start new Game";
document.body.appendChild(resetButton);
resetButton.addEventListener("click", setResetGame);

function checkNumber(guessField) {
  if (guessField.value < 0) guessField.value = 0;
  if (guessField.value > 100) guessField.value = 100;
}

function createGuess() {
  let randomDigit = Math.round(Math.random() * (100 - 1 + 1)) + 1;
  let chooseValue = Number(guessField.value);

  if (guessTurn === 1) {
    code.textContent = "Previous Guess: ";
    guesses.textContent = `  `;
  }
  guesses.textContent += ` ${chooseValue} `;

  if (chooseValue === randomDigit) {
    lastResult.textContent = "congratulation, you got it right!";
    lastResult.style.backgroundColor = "#118000";
    setGameOver();
  } else if (guessTurn === 10) {
    lastResult.textContent = " Game Over ";
    setGameOver();
  } else {
    lastResult.textContent = "Oops! You're Wrong! ";
    lastResult.style.backgroundColor = "#ff0015";
    if (randomDigit <= 9) {
      lowOrHi.textContent = ` 0${randomDigit}`;
    } else {
      lowOrHi.textContent = `${randomDigit}`;
    }
  }
  guessTurn++;
  guessField.value = "";
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  btn.disabled = true;

  resetButton = document.createElement("button");
  resetButton.textContent = "Start new Game";
  document.body.appendChild(resetButton);

  resetButton.addEventListener("click", setResetGame);
}

function setResetGame() {
  guessTurn = 1;
  randomDigit = Math.round(Math.random() * (100 - 1 + 1)) + 1;

  const pTags = document.querySelectorAll(".resultArea p");
  for (const p of pTags) {
    p.textContent = "";
  }
  guessField.disabled = false;
  btn.disabled = false;
  guessField.value = "";
  code.textContent = "";
  lowOrHi.textContent = "00";
  lastResult.style.backgroundColor = "white";
}
btn.addEventListener("click", createGuess);

