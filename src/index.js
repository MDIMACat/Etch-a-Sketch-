fixedAValues = {
    classes : {
        gridContainer: ".container"
    }
}

class Skecth {
    constructor(){
        this.domElement = {}
    }

    startGame(){
        this.initializeElements()
        this.createBody()
    }

    initializeElements(){
        this.domElement.gridContainer = document.querySelector(
            fixedAValues.classes.gridContainer
        )
    }

    createBody(){
        let square = document.createElement("div")
        square.className = "block"
        square.style.height = "20"

        this.domElement.gridContainer.appendChild(square)
      
    }

    
}

if(typeof document !== undefined){
    const game = new Skecth()
    game.startGame()
}