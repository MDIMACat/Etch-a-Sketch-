fixedAValues = {
  classes: {
    gridContainer: ".container",
    changeButton: ".changeGrid",
    setGrid: ".setGrid",
    changeGrid: ".changeGrid",
    rows: "#rowsValue",
    cols: "#colsValue",
    gridSubmit: "#submitBtn"
  },
};

class Skecth {
  constructor() {
    this.domElement = {};
    this.cols = 0;
    this.rows = 0;
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
    this.domElement.gridSubmit = document.querySelector(
      fixedAValues.classes.gridSubmit
    )
  }

  resetProperties(){
    this.rows = 0
    this.cols = 0
  }

  setAGrid(){
    this.domElement.changeGrid.addEventListener("click", () => {
        this.domElement.setGrid.style.display = "flex"
        this.getValues()
       
    })  
  }

  getValues(){
    this.domElement.gridSubmit.addEventListener("click", () => {
      if(!this.domElement.rows.value || !this.domElement.cols.value){
        throw new Error(`Please Enter A value`)
      }

      if(this.cols && this.rows){
        this.resetProperties()
        this.rows = this.domElement.rows.value
        this.cols = this.domElement.cols.value
      } 
      this.rows = this.domElement.rows.value
      this.cols = this.domElement.cols.value
    
      this.domElement.setGrid.style.display = "none"
      this.createBody()
    })
  }
  

  createBody() {

    while (this.domElement.gridContainer.firstChild) {
      this.domElement.gridContainer.removeChild(this.domElement.gridContainer.firstChild);
    }

    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
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
    this.domElement.gridContainer.style.border = "thin"
    this.domElement.gridContainer.style.gridTemplateColumns = `repeat(${this.cols} , 1fr)`
    this.domElement.gridContainer.style.gridTemplateRows = `repeat(${this.rows} , 1fr)`
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
