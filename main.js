/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/GameBoard.js
class GameBoard {
  constructor(boardSize) {
    this.boardSize = boardSize ** 2;
    this.prevIndex = 0;
    this.itemIndex = 0;
    this.missedGoblin = 0;
    this.board = document.getElementById("board");
  }
  drawBoard() {
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement("div");
      itemBoard.className = "field";
      itemBoard.id = `field${i}`;
      this.board.appendChild(itemBoard);
    }
    this.randomImg();
  }
  randomImg() {
    const interval = setInterval(() => {
      do {
        this.itemIndex = Math.floor(Math.random() * this.boardSize);
      } while (this.itemIndex === this.prevIndex);
      if (this.prevIndex >= 0) {
        const prevItemField = document.getElementById(`field${this.prevIndex}`);
        prevItemField.innerHTML = "";
      }
      const itemField = document.getElementById(`field${this.itemIndex}`);
      itemField.innerHTML = '<img id="goblin">';
      this.prevIndex = this.itemIndex;
      this.missedGoblin += 1;
      if (this.missedGoblin === 6) {
        clearInterval(interval);
        alert("Game over");
      }
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/GamePlay.js
class GamePlay {
  constructor(gamePad) {
    this.countHits = 0;
    this.gamePad = gamePad;
  }
  init() {
    const printPoint = document.getElementById("points");
    this.gamePad.board.addEventListener("click", event => {
      if (event.target.id === "goblin") {
        this.gamePad.missedGoblin = 0;
        this.countHits += 1;
        printPoint.innerHTML = this.countHits;
        const elementGoblin = event.target;
        elementGoblin.parentNode.innerHTML = "";
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const gamesBoard = new GameBoard(4);
gamesBoard.drawBoard();
const gamePlay = new GamePlay(gamesBoard);
gamePlay.init();
;// CONCATENATED MODULE: ./src/index.js



//import "./img/goblin";

// TODO: write your code in app.js
/******/ })()
;