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
        for (let j = 0; j < rows; j++) {
            let cell = {
                x: i,
                y: j,
                empty: true,
                player: 0,
            };
            cells.push(cell);
            let cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.dataset.x = i.toString();
            cellElement.dataset.y = j.toString();
            board.appendChild(cellElement);
            console.log(cell);
        }
    }
}
drawGrid();
let cards = [];
function dealCards() {
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    player1.innerHTML = '';
    player2.innerHTML = '';
    player1.style.gridTemplateColumns = `repeat(1, 150px)`;
    player1.style.gridTemplateRows = `repeat(5, 150px)`;
    player2.style.gridTemplateColumns = `repeat(1, 150px)`;
    player2.style.gridTemplateRows = `repeat(5, 150px)`;
    for (let i = 0; i < 10; i++) {
        let card = {
            name: "Card",
            dirN: Math.random() < 0.5,
            dirNE: Math.random() < 0.5,
            dirNW: Math.random() < 0.5,
            dirE: Math.random() < 0.5,
            dirS: Math.random() < 0.5,
            dirSE: Math.random() < 0.5,
            dirSW: Math.random() < 0.5,
            dirW: Math.random() < 0.5,
            player1: i < 5,
            img: "",
        };
        cards.push(card);
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.id = `card${i}`;
        cardElement.dataset.index = i.toString();
        if (card.player1) {
            cardElement.style.backgroundColor = "darkblue";
            player1.appendChild(cardElement);
        }
        else {
            cardElement.style.backgroundColor = "darkred";
            player2.appendChild(cardElement);
        }
    }
}
// Interact
window.addEventListener("load", loadHandler);
function loadHandler(_event) {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
    document.addEventListener("mousedown", selectCard);
}
function selectCard(_event) {
    const targetCard = _event.target;
    if (targetCard.classList.contains("card")) {
        {
            let shiftX = _event.clientX - targetCard.getBoundingClientRect().left;
            let shiftY = _event.clientY - targetCard.getBoundingClientRect().top;
            targetCard.style.position = 'absolute';
            targetCard.style.width = "150px";
            targetCard.style.height = "150px";
            targetCard.style.zIndex = "1";
            document.body.append(targetCard);
            function moveAt(pageX, pageY) {
                targetCard.style.left = pageX - shiftX + 'px';
                targetCard.style.top = pageY - shiftY + 'px';
            }
            moveAt(_event.pageX, _event.pageY);
            function onMouseMove(_event) {
                moveAt(_event.pageX, _event.pageY);
                let currentCell = null;
                targetCard.hidden = true;
                let elemBelow = document.elementFromPoint(_event.clientX, _event.clientY);
                targetCard.hidden = false;
                if (!elemBelow)
                    return;
                const cell = elemBelow.closest(".cell");
                if (currentCell !== cell) {
                    currentCell = cell;
                    leaveCell(currentCell);
                    console.log("leaveCell");
                    if (currentCell) {
                        hoverCell(currentCell);
                        console.log("enterCell");
                    }
                }
            }
            document.addEventListener('mousemove', onMouseMove);
            targetCard.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                targetCard.onmouseup = null;
            };
            targetCard.ondragstart = function () {
                return false;
            };
        }
    }
}
function hoverCell(cell) {
    cell.style.backgroundColor = "#555";
}
function leaveCell(cell) {
    cell.style.backgroundColor = "#333";
    console.log("leaveCell");
}
// Start Game
function startGame(_event) {
    cards.length = 0;
    dealCards();
    console.log(cards);
}
