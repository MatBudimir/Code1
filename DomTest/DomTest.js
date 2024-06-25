"use strict";
//Array
let bodyContent = [
    "REDRUM", "CocaCola", "Code1", "ZeroSugar", "Goblin", "Cthulhu"
];
//Loops
let i = 0;
do {
    i++;
    let newSpan = document.createElement("span");
    //Random Text
    const randomText = bodyContent[Math.floor(Math.random() * bodyContent.length)];
    newSpan.textContent = randomText;
    //Random Color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    newSpan.style.color = "#" + randomColor;
    //Random Position
    newSpan.style.position = "absolute";
    newSpan.style.left = Math.random() * 99 + "%";
    newSpan.style.top = Math.random() * 99 + "%";
    console.log(newSpan);
    //Random Size
    newSpan.style.fontSize = Math.random() * window.innerWidth * 0.3 + "px";
    //Append New Span
    document.body.appendChild(newSpan);
} while (i < 12);
//Events#
document.body.addEventListener("click", handleClick);
function handleClick(_event) {
    let target = _event.target;
    if (target == document.body)
        return;
    target.textContent = bodyContent[Math.floor(Math.random() * bodyContent.length)];
    target.style.color = "red";
    target.style.fontSize = Math.random() * window.innerWidth * 0.3 + "px";
    console.log(_event.currentTarget);
}
