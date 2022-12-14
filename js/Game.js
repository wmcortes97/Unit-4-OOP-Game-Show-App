/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Smile while you still have teeth"),
      new Phrase("Embrace the pace of your own journey"),
      new Phrase("You are awesome"),
      new Phrase("Focus on the present"),
      new Phrase("A day without laughter is a day wasted"),
    ];
    this.activePhrase = null;
  }
  getRandomPhrase() {
    let randomPhraseObject = this.phrases[Math.floor(Math.random() * 5)];
    return randomPhraseObject;
  }
  startGame() {
    let startScreenOverlay = document.getElementById("overlay");
    startScreenOverlay.style.display = "none";
    let currentPhrase = this.getRandomPhrase(); //must store so it only holds one random phrase object
    this.activePhrase = currentPhrase;
    currentPhrase.addPhraseToDisplay();
  }
  /**'
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    let letters = document.querySelectorAll(".letter"); //returns all li's
    let lettersArr = Array.from(letters);

    let win = lettersArr.every((letter) => letter.matches(".show"));
    if (win === true) {
      this.gameOver(win);
    }
    return win;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    let heartLife = document.querySelectorAll("#scoreboard img"); //returns heart li's

    let heartImg = heartLife[this.missed];
    heartImg.setAttribute("src", "images/lostHeart.png");
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    let startScreenOverlay = document.getElementById("overlay");
    startScreenOverlay.style.display = "";
    let messageSelection = document.querySelector("h1");

    if (gameWon) {
      messageSelection.innerHTML = "YOU WON";
      startScreenOverlay.className = "win";
    } else {
      messageSelection.innerHTML = "YOU LOST";
      startScreenOverlay.className = "lose";
    }
  }
  /**
   *Handles game logic
   * @param {target element} button - holds the element of the key button
   */
  handleInteraction(button) {
    let splitPhrase = this.activePhrase.phrase.split("");
    if (splitPhrase.includes(button.textContent)) {
      button.disabled = true;
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      this.checkForWin();
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }
}
//pushed
