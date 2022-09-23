/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    let splitPhrase = this.phrase.split("");
    let html = "";

    for (let i = 0; i < splitPhrase.length; i++) {
      if (splitPhrase[i] !== " ") {
        html += `<li class="hide letter ${splitPhrase[i]}">${splitPhrase[i]}</li>`;
      } else {
        html += `<li class="space"></li>`;
      }
    }

    document.querySelector("#phrase ul").innerHTML = html;
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    let splitPhrase = this.phrase.split("");

    for (let i = 0; i < splitPhrase.length; i++) {
      if (splitPhrase[i] === letter) {
        return true;
      }
    }
    return false;
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    if (this.checkLetter(letter)) {
      let letterMatches = document.querySelectorAll(`.${letter}`);
      for (let i = 0; i < letterMatches.length; i++) {
        letterMatches[i].classList.add("show");
        letterMatches[i].classList.remove("hide");
      }
    }
  }
}
