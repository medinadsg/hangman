const wordEl = document.getElementById('word');
const keyboardEl = document.getElementById('keyboard');
const guessesLeftEl = document.getElementById('guesses');
const hangmanImageEl = document.getElementById('hangman-image');
const resetButton = document.getElementById('reset');

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

function chooseWord() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
}

function updateGuessesLeft() {
  guessesLeftEl.textContent = guessesLeft;
}

function updateWordDisplay() {
  const displayWord = word.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
  wordEl.textContent = displayWord;
}

function createKeyboard() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement('button');
    button.textContent = alphabet[i];
    button.addEventListener('click', () => handleLetterClick(alphabet[i]));
    keyboardEl.appendChild(button);
  }
}

function updateHangmanImage() {}

function resetGame() {
  wordEl.textContent = '';
  keyboardEl.innerHTML = '';
  guessesLeft = 6;
  guessedLetters = [];
  chooseWord();
  updateHangmanImage();
  updateGuessesLeft();
  createKeyboard();
}

chooseWord();
updateWordDisplay();
updateHangmanImage();
updateGuessesLeft();
createKeyboard();

resetButton.addEventListener('click', resetGame);

function handleLetterClick(letter) {
  if (guessedLetters.includes(letter)) {
    return;
  }

  guessedLetters.push(letter);

  if (!word.includes(letter)) {
    guessesLeft--;
  }

  updateWordDisplay();
  updateHangmanImage();
  updateGuessesLeft();

  if (word.split('').every(l => guessedLetters.includes(l))) {
    alert('You win!');
    resetGame();
  } else if (guessesLeft === 0) {
    alert('You lose! The word was ' + word);
    resetGame();
  }
}