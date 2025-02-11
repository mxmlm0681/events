export default class GameBoard {
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
