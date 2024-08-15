const wordEl = document.getElementById('word');
const keyboardEl = document.getElementById('keyboard');
const guessesLeftEl = document.getElementById('guesses');

const wordList = [
  'javascript', 
  'programming', 
  'computer', 
  'science', 
  'python'
];

let word = '';
let guessesLeft = 6;
let guessedLetters = [];

// Function to choose a random word
function chooseWord() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
}

// Function to update the guesses left display
function updateGuessesLeft() {
  guessesLeftEl.textContent = guessesLeft;
}

// Function to update the display of the word
function updateWordDisplay() {
  const displayWord = '';
  wordEl.textContent = displayWord;
}

// Function to create the keyboard
function createKeyboard() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement('button');
    button.textContent = alphabet[i];
    keyboardEl.appendChild(button);
  }
}

// Function to update the hangman image
function updateHangmanImage() {
}

// Function to reset the game
function resetGame() {
  wordEl.textContent = '';
  keyboardEl.innerHTML = '';
  guessesLeft = 6;
  guessedLetters = [];
  chooseWord();
  updateHangmanImage();
  updateGuessesLeft();
  keyboardEl.innerHTML = '';
  createKeyboard();
}

// Function to create the keyboard
function createKeyboard() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement('button');
    button.textContent = alphabet[i];
    keyboardEl.appendChild(button);
  }
}

// Initialize the game when the page loads
chooseWord();
updateWord();
updateHangmanImage();
updateGuessesLeft();
createKeyboard();

// Add event listener for the reset button
resetButtonEl.addEventListener('click', resetGame);