console.log("Hello")

//DOM Manipulation

let spanElement = document.querySelector("#idHello")!;
spanElement.textContent = "Have a";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "nice day!";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "";

console.log(newSpan);



//Array
let bodyContent: string[] = [
    "REDRUM", "CocaCola", "Code1", "ZeroSugar", "Goblin", "Cthulhu"
];


//Loops
let i = 0;

do {
    i++;
    let newSpan: HTMLSpanElement = document.createElement("span");
    
    //Random Text
    const randomText = bodyContent[Math.floor(Math.random() * bodyContent.length)];
    newSpan.textContent = randomText;

    //Random Color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    newSpan.style.color = "#" + randomColor;

    //Random Position
    newSpan.style.position = "absolute";
    newSpan.style.left = Math.random() * window.innerWidth + "px";
    newSpan.style.top = Math.random() * window.innerHeight + "px";

    //Random Size
    newSpan.style.fontSize = Math.random() * window.innerWidth * 0.3 + "px";

    //Append New Span
    document.body.appendChild(newSpan);
} while (i < 50)