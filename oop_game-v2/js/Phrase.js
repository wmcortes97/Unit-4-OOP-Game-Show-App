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
  // checkLetter() {
  //   let letters = document.querySelectorAll(".key"); //returns all the elements with the class "key"

  //   letters.addEventListener("click", e => {
  //     if (e.target === ) {

  //     }
  //   })

  // }
  // showMatchedLetter() {

  // }
}
