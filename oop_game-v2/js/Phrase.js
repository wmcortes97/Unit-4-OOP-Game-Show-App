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
  checkLetter(letter) {
    //return boolean?
    let splitPhrase = this.phrase.split("");
    splitPhrase.forEach((character) => {
      if (character === letter) {
        return true;
      }
    });
    return false;
  }
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

// litPhrase.length; i++) {
//         if (e.target.textContent === splitPhrase[i]) {
//          return true;
//         } else {let keyboard = document.getElementById("qwerty"); //returns all the elements with the class "key"

//     keyboard.addEventListener("click", (e) => {
//       let splitPhrase = this.phrase.split("");
//       for (let i = 0; i < sp
//           return false;
//         }
//       }

//     })
