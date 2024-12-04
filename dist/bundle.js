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

eval("fixedAValues = {\n    classes : {\n        gridContainer: \".container\"\n    }\n}\n\nclass Skecth {\n    constructor(){\n        this.domElement = {}\n    }\n\n    startGame(){\n        this.initializeElements()\n        this.createBody()\n    }\n\n    initializeElements(){\n        this.domElement.gridContainer = document.querySelector(\n            fixedAValues.classes.gridContainer\n        )\n    }\n\n    createBody(){\n        let idx = 1\n        for(let j = 0; j < 16; j++){\n            for(let i = 0; i < 16; i++){\n                const cell = document.createElement(\"div\")\n                cell.classList.add(\"cell\")\n                cell.classList.add(`cell${idx}`)\n                this.domElement.gridContainer.appendChild(cell)\n                idx++\n            }\n        }\n      \n    }\n\n    \n}\n\nif(typeof document !== undefined){\n    const game = new Skecth()\n    game.startGame()\n}\n\n//# sourceURL=webpack://etch-a-sketch-/./src/index.js?");

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