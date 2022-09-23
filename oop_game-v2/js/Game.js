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
    this.actvePhrase = null;
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

    return lettersArr.every((letter) => letter.matches(".show"));
    // let hidden = document.querySelectorAll(".hide");
    // for (let i = 0; i < hidden.length; i++) {
    //   if (hidden[i].matches === ".hide") {
    //     return true;
    //   } else {
    //     return ;
    //   }
    // }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    let heartLife = document.querySelectorAll("#scoreboard img"); //returns heart li's

    for (let i = 0; i < heartLife.length + 1; i++) {
      // if (this.startGame.checkLetter(letter) === false) {
      //this.missed += 1;
      let heartImg = heartLife[i];
      heartImg.setAttribute("src", "images/lostHeart.png");
      // if (this.missed === 5) {
      //   this.gameOver(gameWon);
      //   //}
      // }
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  // gameOver(gameWon) {
  //   if () {

  //   }

  // }
}
