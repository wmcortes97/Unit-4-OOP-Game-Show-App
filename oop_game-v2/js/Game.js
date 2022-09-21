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
    let quoteObject = this.phrases[Math.floor(Math.random() * 5)];
    return quoteObject;
  }
}
