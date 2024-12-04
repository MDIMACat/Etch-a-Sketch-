fixedAValues = {
  classes: {
    gridContainer: ".container",
    changeButton: ".changeGrid",
    setGrid: ".setGrid",
    changeGrid: ".changeGrid",
    row: ".setUpInputRows",
    cols: ".setUpInputCols"
  },
};

class Skecth {
  constructor() {
    this.domElement = {};
  }

  startGame() {
    this.initializeElements();
    this.setAGrid()
  }

  initializeElements() {
    this.domElement.gridContainer = document.querySelector(
      fixedAValues.classes.gridContainer
    );
    this.domElement.changeButton = document.querySelector(
        fixedAValues.classes.changeButton
    );
    this.domElement.setGrid = document.querySelector(
        fixedAValues.classes.setGrid
    );
    this.domElement.changeGrid = document.querySelector(
        fixedAValues.classes.changeGrid
    );
    this.domElement.rows = document.querySelector(
        fixedAValues.classes.rows
    );
    this.domElement.cols = document.querySelector(
        fixedAValues.classes.cols
    );
  }

  setAGrid(){
    this.domElement.changeGrid.addEventListener("click", () => {
        this.domElement.setGrid.style.display = "flex"

        // Fix this function to get the input values
        const [rows, cols] = this.getInputs()
        console.log(`Rows ${rows}`)
        console.log(`Cols  ${cols}`)
    })
  }

  getInputs(){
    const rows = this.domElement.rows.value
    const cols = this.domElement.cols.value
    return [rows, cols]
  }

  createBody() {
    this.domElement.gridContainer.style.border = "solid"
    for (let j = 0; j < 16; j++) {
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter", () => {
            let color = this.generateColor()
            cell.style.backgroundColor = color
        });
        cell.addEventListener("mouseleave", () => {
            cell.style.opacity = "50%"
        })
        this.domElement.gridContainer.appendChild(cell);
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
