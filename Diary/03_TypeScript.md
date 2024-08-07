# TypeScript

## Setup

### Github

    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com

### TSC

    (npx) tsc --init
    (npx) tsc --watch

## Arrays

### Simple Array

    let array: string[] = [string0, string1, string2, string3, stringN];

### Associative Array

    let array: {[key: string]: string;} =
    {
        key0: "string",
        key1: "string",
        key2: "string",
        keyN: "string",
    }

### Nested Array (Interface)

    interface nestedArray
    {  
    key_nA: string;
    key_nA_1: Array2[]; 
    }

    interface Array2
    {
    key_array2: string;
    key_array2_1: string;
    }

    let Array: { [key: string]: nestedArray; } = {
    "key": {
        "key_nA": "string",
        [{
            "key_array2": "string",
            "key_array2_1": "string"
        }]
    }
    } 

## If/else & switch/case

### if/else

    if (condition){
        true;
    } else {
        false;
    }

### switch/case

    let variable: string = promt(array)!;
    swtich (variable)
    {
    case "case1":
        [insert task];
        break;
    case "case2":
        [insert task];
        break;
    case "case3":
        [insert task];
        break;
    case "caseN":
        [insert task];
        break;
    default:
        [insert task];
        break;
    }

## Functions

### Setup Function

    function Function(): void {
        [insert tasks];
    }

### Call Function

    Function();

## Loops

### do / while

    let i = 0;
    do {
        i++;
    } while (i < number)

### while

    while (let i = 0; i < number, i++) {

    }

## Events

### handleClick

    document.body.addEventListener("click", handleClick);

    function handleClick(_event: Event): void 
    {
    let target: HTMLElement = <HTMLElement>_event.target;
    if (target == document.body)
        return;
    }

### handleLoad

    window.addEventListener("load", handleLoad);

     function handleLoad(_event: Event): void
    {
        let var: HTMLElement = <HTMLElement>document.querySelector("div#tag");
        var.addEventListener("click", functionA);
        document.addEventListener("keydown", functionB);
    }

### MouseEvent

    function functionA(_event: MouseEvent): void {}

### KeyboardEvent

    function functionB(_event: KeyboardEvent): void {}

## Canvas

### Setup

    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

### Draw

    function drawSquare(ctx: CanvasRenderingContext2D, color: string) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 50, 50);
    }

## Classes

### Class

    interface ClassArray
    {
    var: string;
    var2: booleab;
    var3: number;
    }

    class Class
    {
    private string: string;
    private number: number;
    private boolean: boolean;
    private array: ClassArray[] = [];

    constructor(private construct: {[key: string]})
    {
        this.string = "string";
        this.number = 0;
        this.boolean = false;
        this.array = new ClassArray();
    }

    addToArray(name: string): void
    { this.array.push
        ({
            var: "",
            var2: false,
            var3: 0,
        });
    }
    }

### Inventory

    interface Item
    {
        name: string;
        type: string;
        amount: number;
    }

    class Inventory
    {
        private items: Item[] = [];

        addItem(name: string): void
        {
            this.items.push({
                name,
                type: "",
                amount: 0
            });
        }

        removeItem(name: string): void
        {
            this.items = this.items.filter(item => item.name !== name);
        }

        hasItem(name: string): boolean
        {
            return this.items.some(item => item.name === name);
        }
    }


## Animation: Time Signal

### setTimeout

    setTimeout(exampleFunction, t) // Does exampleFunction after t * milliseconds

### setInterval

    setInterval(exampleFunction, ms) // Does exampleFunction every t * milliseconds

### requestAnimation

    const object = document.getElementById('ID');
    let leftpos = 0;

    function moveObject(timestamp){
        leftpos += 5;
        object.style.left = leftpos + 'px';
        requestAnimationFrame(moveObject);
    }   

    requestAnimationFrame(moveObject); 