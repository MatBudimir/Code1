console.log("Hello")

//DOM Manipulation

let spanElement = document.querySelector("#idHello")!;
spanElement.textContent = "Have a";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "nice day!";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "";

console.log(newSpan);

//Loops

let i = 0;

do {
    i++;
    console.log(i);
    
} while (i < 10)