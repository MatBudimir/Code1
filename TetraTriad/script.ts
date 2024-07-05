// Game Board
interface CellAttributes
{
    x: number;
    y: number;
    empty: boolean;
    player: number;
}

let cells: CellAttributes[] = [];

function drawGrid()
{
    let cols: number = 4;
    let rows: number = 4;
    let board: HTMLSpanElement = <HTMLSpanElement>document.getElementById("board");
    board.style.gridTemplateColumns = `repeat(${cols}, 150px)`;
    board.style.gridTemplateRows = `repeat(${rows}, 150px)`;
    board.innerHTML = '';
    console.log("Rows: " + rows);

    for (let i = 0; i < cols; i++)
    {
        cells.push({
            x: i,
            y: 0,
            empty: true,
            player: 0,
        });
        console.log(i);
        for (let j = 0; j < rows; j++)
        {
            cells[i].y = j;
            let cell: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            board.appendChild(cell);
            cell.id = "cell";
            console.log(cells[i]);
        }
    }
}

drawGrid();

// Cards
interface CardStats
{
    name: string,
    dirN: boolean,
    dirNE: boolean,
    dirNW: boolean,
    dirE: boolean,
    dirS: boolean,
    dirSE: boolean,
    dirSW: boolean,
    dirW: boolean,
    player1: boolean,
    img: string,
}

let cards: CardStats[] = [];

function dealCards()
{
    for (let i: number = 0; i < 10; i++)
    {
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
        let player1: HTMLSpanElement = <HTMLSpanElement>document.getElementById("player1");
        player1.style.gridTemplateColumns = `repeat(${1}, 150px)`;
        player1.style.gridTemplateRows = `repeat(${5}, 150px)`;
        player1.innerHTML = '';

        let player2: HTMLSpanElement = <HTMLSpanElement>document.getElementById("player2");
        player2.style.gridTemplateColumns = `repeat(${1}, 150px)`;
        player2.style.gridTemplateRows = `repeat(${5}, 150px)`;
        player2.innerHTML = '';

        for (let i = 0; i < 5; i++)
        {
            let cardsTest: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            player1.appendChild(cardsTest);
            cardsTest.id = "card";
        }
        for (let i = 5; i < 10; i++)
        {
            let cardsTest: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            player2.appendChild(cardsTest);
            cardsTest.id = "card";
        }
    }

}

// Interact
window.addEventListener("load", loadHandler)!;

function loadHandler(_event: Event)
{
    let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");

    startButton.addEventListener("click", startGame);
}

function handleLoad(_event: Event): void
{
    let card: HTMLElement = <HTMLElement>document.querySelector("div#card");
    card.addEventListener("mousedown", selectCard);
}

function selectCard(_event: MouseEvent)
{
    console.log(_event);
    let targetCard: HTMLElement = <HTMLElement>_event.target;
}

function placeCard(_event: MouseEvent)
{
    let targetSquare: HTMLElement = <HTMLElement>_event.target;
    targetSquare.addEventListener("mouseup", placeCard);
}

// Start Game
function startGame(_event: MouseEvent)
{
    dealCards();
    console.log(cards);
}