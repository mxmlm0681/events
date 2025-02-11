export default class GamePlay {
  constructor(gamePad) {
    this.countHits = 0;
    this.gamePad = gamePad;
  }

  init() {
    const printPoint = document.getElementById("points");
    this.gamePad.board.addEventListener("click", (event) => {
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
