fixedAValues = {
  classes: {
    gridContainer: ".container",
  },
};

class Skecth {
  constructor() {
    this.domElement = {};
  }

  startGame() {
    this.initializeElements();
    this.createBody();
  }

  initializeElements() {
    this.domElement.gridContainer = document.querySelector(
      fixedAValues.classes.gridContainer
    );
  }

  createBody() {
    let idx = 1;
    for (let j = 0; j < 16; j++) {
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            let color = this.generateColor()
            cell.style.backgroundColor = color
        });
        this.domElement.gridContainer.appendChild(cell);
        idx++;
      }
    }
  }

  generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

if (typeof document !== undefined) {
  const game = new Skecth();
  game.startGame();
}
