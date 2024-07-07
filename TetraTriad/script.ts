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
        for (let j = 0; j < rows; j++)
        {
            let cell: CellAttributes = {
                x: i,
                y: j,
                empty: true,
                player: 0,
            };
            cells.push(cell);

            let cellElement: HTMLDivElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.dataset.x = i.toString();
            cellElement.dataset.y = j.toString();
            board.appendChild(cellElement);
            console.log(cell);
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
    const player1: HTMLElement = document.getElementById("player1")!;
    const player2: HTMLElement = document.getElementById("player2")!;
    player1.innerHTML = '';
    player2.innerHTML = '';

    player1.style.gridTemplateColumns = `repeat(1, 150px)`;
    player1.style.gridTemplateRows = `repeat(5, 150px)`;
    player2.style.gridTemplateColumns = `repeat(1, 150px)`;
    player2.style.gridTemplateRows = `repeat(5, 150px)`;

    for (let i: number = 0; i < 10; i++)
    {
        let card: CardStats = {
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

        let cardElement: HTMLDivElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.id = `card${i}`;
        cardElement.dataset.index = i.toString();
        if (card.player1)
        {
            cardElement.style.backgroundColor = "darkblue";
            player1.appendChild(cardElement);
        } else
        {
            cardElement.style.backgroundColor = "darkred";
            player2.appendChild(cardElement);
        }
    }

}

// Interact
window.addEventListener("load", loadHandler);

function loadHandler(_event: Event)
{
    const startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
    startButton.addEventListener("click", startGame);

    document.addEventListener("mousedown", selectCard);
}

function selectCard(_event: MouseEvent)
{
    const targetCard: HTMLElement = <HTMLElement>_event.target;
    if (targetCard.classList.contains("card"))
    {
        {
            let shiftX = _event.clientX - targetCard.getBoundingClientRect().left;
            let shiftY = _event.clientY - targetCard.getBoundingClientRect().top;

            targetCard.style.position = 'absolute';
            targetCard.style.width = "150px";
            targetCard.style.height = "150px";
            targetCard.style.zIndex = "1";

            document.body.append(targetCard);

            function moveAt(pageX: number, pageY: number)
            {
                targetCard.style.left = pageX - shiftX + 'px';
                targetCard.style.top = pageY - shiftY + 'px';
            }

            moveAt(_event.pageX, _event.pageY);

            function onMouseMove(_event: MouseEvent)
            {
                moveAt(_event.pageX, _event.pageY);

                let currentCell: HTMLElement | null = null;
                targetCard.hidden = true;
                let elemBelow = document.elementFromPoint(_event.clientX, _event.clientY);
                targetCard.hidden = false;

                if (!elemBelow) return;

                const cell: HTMLElement = <HTMLElement>elemBelow.closest(".cell");

                if (currentCell !== cell)
                {
                    currentCell = cell;
                    leaveCell(currentCell);
                    console.log("leaveCell");

                    
                    if (currentCell)
                    {
                        hoverCell(currentCell);
                        console.log("enterCell");
                    }
                }
            }

            document.addEventListener('mousemove', onMouseMove);

            targetCard.onmouseup = function ()
            {
                document.removeEventListener('mousemove', onMouseMove);
                targetCard.onmouseup = null;
            };

            targetCard.ondragstart = function ()
            {
                return false;
            };
        }
    }
}

function hoverCell(cell: HTMLElement)
{
    cell.style.backgroundColor = "#555";
}

function leaveCell(cell: HTMLElement)
{
    cell.style.backgroundColor = "#333";
    console.log("leaveCell");
}

// Start Game
function startGame(_event: MouseEvent)
{
    cards.length = 0;
    dealCards();
    console.log(cards);
}
