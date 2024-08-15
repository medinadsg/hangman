class HangmanGame {
  constructor(wordList, wordEl, keyboardEl, guessesLeftEl, resetButton) {
    this.wordList = wordList;
    this.wordEl = wordEl;
    this.keyboardEl = keyboardEl;
    this.guessesLeftEl = guessesLeftEl;
    this.resetButton = resetButton;
    this.word = '';
    this.guessesLeft = 6;
    this.guessedLetters = [];
  }

  chooseWord() {
    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
  }

  updateGuessesLeft() {
    this.guessesLeftEl.textContent = this.guessesLeft;
  }

  updateWordDisplay() {
    const displayWord = this.word.split('').map(letter => this.guessedLetters.includes(letter) ? letter : '_').join(' ');
    this.wordEl.textContent = displayWord;
  }

  createKeyboard() {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < alphabet.length; i++) {
      const button = document.createElement('button');
      button.textContent = alphabet[i];
      button.addEventListener('click', () => this.handleLetterClick(alphabet[i]));
      this.keyboardEl.appendChild(button);
    }
  }

  updateHangmanImage() {}

  resetGame() {
    this.wordEl.textContent = '';
    this.keyboardEl.innerHTML = '';
    this.guessesLeft = 6;
    this.guessedLetters = [];
    this.chooseWord();
    this.updateHangmanImage();
    this.updateGuessesLeft();
    this.createKeyboard();
  }

  handleLetterClick(letter) {
    if (this.guessedLetters.includes(letter)) {
      return;
    }

    this.guessedLetters.push(letter);

    if (!this.word.includes(letter)) {
      this.guessesLeft--;
    }

    this.updateWordDisplay();
    this.updateHangmanImage();
    this.updateGuessesLeft();

    if (this.word.split('').every(l => this.guessedLetters.includes(l))) {
      alert('You win!');
      this.resetGame();
    } else if (this.guessesLeft === 0) {
      alert('You lose! The word was ' + this.word);
      this.resetGame();
    }
  }

  startGame() {
    this.chooseWord();
    this.updateWordDisplay();
    this.updateHangmanImage();
    this.updateGuessesLeft();
    this.createKeyboard();
    this.resetButton.addEventListener('click', () => this.resetGame());
    document.addEventListener('keydown', (e) => {
      const letter = e.key.toLowerCase();
      if (letter.match(/[a-z]/) && !this.guessedLetters.includes(letter)) {
        this.handleLetterClick(letter);
      }
    });
  }
}

const wordList = [
  'javascript', 
  'programming', 
  'computer', 
  'science', 
  'python'
];

const wordEl = document.getElementById('word');
const keyboardEl = document.getElementById('keyboard');
const guessesLeftEl = document.getElementById('guesses');
const resetButton = document.getElementById('reset');

const game = new HangmanGame(wordList, wordEl, keyboardEl, guessesLeftEl, resetButton);
game.startGame();