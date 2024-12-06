/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("fixedAValues = {\n  classes: {\n    gridContainer: \".container\",\n    changeButton: \".changeGrid\",\n    setGrid: \".setGrid\",\n    changeGrid: \".changeGrid\",\n    rows: \"#rowsValue\",\n    cols: \"#colsValue\",\n    gridSubmit: \"#submitBtn\",\n    clearGrid: \"#clearGridButton\"\n  },\n};\n\nclass Skecth {\n  constructor() {\n    this.domElement = {};\n    this.cols = 0;\n    this.rows = 0;\n  }\n\n  startGame() {\n    this.initializeElements();\n    this.getValues()\n    this.clearGrid()\n  }\n\n  initializeElements() {\n    this.domElement.gridContainer = document.querySelector(\n      fixedAValues.classes.gridContainer\n    );\n    this.domElement.changeButton = document.querySelector(\n        fixedAValues.classes.changeButton\n    );\n    this.domElement.setGrid = document.querySelector(\n        fixedAValues.classes.setGrid\n    );\n    this.domElement.changeGrid = document.querySelector(\n        fixedAValues.classes.changeGrid\n    );\n    this.domElement.rows = document.querySelector(\n        fixedAValues.classes.rows\n    );\n    this.domElement.cols = document.querySelector(\n        fixedAValues.classes.cols\n    );\n    this.domElement.gridSubmit = document.querySelector(\n      fixedAValues.classes.gridSubmit\n    );\n    this.domElement.clearGrid = document.querySelector(\n      fixedAValues.classes.clearGrid\n    )\n  }\n\n  resetProperties(){\n    this.rows = 0\n    this.cols = 0\n  }\n\n\n\n  getValues(){\n    this.domElement.gridSubmit.addEventListener(\"click\", () => {\n      if(!this.domElement.rows.value || !this.domElement.cols.value){\n        throw new Error(`Please Enter A value`)\n      }\n\n      if(this.cols && this.rows){\n        this.resetProperties()\n        this.rows = this.domElement.rows.value\n        this.cols = this.domElement.cols.value\n      } \n      this.rows = this.domElement.rows.value\n      this.cols = this.domElement.cols.value\n      this.createBody()\n    })\n  }\n  \n\n  createBody() {\n\n    while (this.domElement.gridContainer.firstChild) {\n      this.domElement.gridContainer.removeChild(this.domElement.gridContainer.firstChild);\n    }\n\n    for (let j = 0; j < this.cols; j++) {\n      for (let i = 0; i < this.rows; i++) {\n        const cell = document.createElement(\"div\");\n        cell.classList.add(\"cell\");\n        cell.addEventListener(\"mouseenter\", () => {\n            let color = this.generateColor()\n            cell.style.backgroundColor = color\n        });\n        cell.addEventListener(\"mouseleave\", () => {\n            cell.style.opacity = \"100%\"\n        })\n        this.domElement.gridContainer.appendChild(cell);\n      }\n      \n    }\n    this.domElement.gridContainer.style.border = \"thin\"\n    this.domElement.gridContainer.style.gridTemplateColumns = `repeat(${this.cols} , 1fr)`\n    this.domElement.gridContainer.style.gridTemplateRows = `repeat(${this.rows} , 1fr)`\n  }\n\n  generateColor() {\n    const letters = \"0123456789ABCDEF\";\n    let color = \"#\";\n    for (let i = 0; i < 6; i++) {\n      color += letters[Math.floor(Math.random() * 16)];\n    }\n    return color;\n  }\n\n  clearGrid(){\n    this.domElement.clearGrid.addEventListener(\"click\", () => {\n      if(this.domElement.gridContainer.hasChildNodes(\"cell\")){\n        for(let i = 0; i < this.domElement.gridContainer.childNodes.length; i++){\n          this.domElement.gridContainer.childNodes[i].style.backgroundColor = \"#fff\"\n        }\n      }\n    })\n  }\n}\n\nif (typeof document !== undefined) {\n  const game = new Skecth();\n  game.startGame();\n}\n\n//# sourceURL=webpack://etch-a-sketch-/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;