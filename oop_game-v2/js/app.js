/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

let startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", () => {
  let phrase = document.querySelectorAll("#phrase li");
  for (let i = 0; i < phrase.length; i++) {
    phrase[i].remove();
  }

  let keyButtons = document.querySelectorAll(".key");
  for (let i = 0; i < keyButtons.length; i++) {
    keyButtons[i].disabled = false;
    keyButtons[i].className = "key";
  }

  let resetHearts = document.querySelectorAll("#scoreboard img");
  for (let i = 0; i < resetHearts.length; i++) {
    resetHearts[i].setAttribute("src", "images/liveHeart.png");
  }

  (game = new Game()).startGame();
});

let keys = document.getElementById("qwerty");

keys.addEventListener("click", (e) => {
  if (e.target.className === "key") {
    let button = e.target;
    game.handleInteraction(button);
  }
});
