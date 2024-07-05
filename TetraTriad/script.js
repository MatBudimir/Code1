"use strict";
let cells = [];
function drawGrid() {
    let cols = 4;
    let rows = 4;
    let board = document.getElementById("board");
    board.style.gridTemplateColumns = `repeat(${cols}, 150px)`;
    board.style.gridTemplateRows = `repeat(${rows}, 150px)`;
    board.innerHTML = '';
    console.log("Rows: " + rows);
    for (let i = 0; i < cols; i++) {
        cells.push({
            x: i,
            y: 0,
            empty: true,
            player: 0,
        });
        console.log(i);
        for (let j = 0; j < rows; j++) {
            cells[i].y = j;
            let cell = document.createElement("div");
            board.appendChild(cell);
            cell.id = "cell";
            console.log(cells[i]);
        }
    }
}
drawGrid();
let cards = [];
function dealCards() {
    for (let i = 0; i < 10; i++) {
        cards.push({
            name: "Card",
            dirN: Math.random() < 0.5,
            dirNE: Math.random() < 0.5,
            dirNW: Math.random() < 0.5,
            dirE: Math.random() < 0.5,
            dirS: Math.random() < 0.5,
            dirSE: Math.random() < 0.5,
            dirSW: Math.random() < 0.5,
            dirW: Math.random() < 0.5,
            player1: true,
            img: "",
        });
        let player1 = document.getElementById("player1");
        player1.style.gridTemplateColumns = `repeat(${1}, 150px)`;
        player1.style.gridTemplateRows = `repeat(${5}, 150px)`;
        player1.innerHTML = '';
        let player2 = document.getElementById("player2");
        player2.style.gridTemplateColumns = `repeat(${1}, 150px)`;
        player2.style.gridTemplateRows = `repeat(${5}, 150px)`;
        player2.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let cardsTest = document.createElement("div");
            player1.appendChild(cardsTest);
            cardsTest.id = "card";
        }
        for (let i = 5; i < 10; i++) {
            let cardsTest = document.createElement("div");
            player2.appendChild(cardsTest);
            cardsTest.id = "card";
        }
    }
}
// Interact
window.addEventListener("load", loadHandler);
function loadHandler(_event) {
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
}
function handleLoad(_event) {
    let card = document.querySelector("div#card");
    card.addEventListener("mousedown", selectCard);
}
function selectCard(_event) {
    console.log(_event);
    let targetCard = _event.target;
}
function placeCard(_event) {
    let targetSquare = _event.target;
    targetSquare.addEventListener("mouseup", placeCard);
}
// Start Game
function startGame(_event) {
    dealCards();
    console.log(cards);
}
