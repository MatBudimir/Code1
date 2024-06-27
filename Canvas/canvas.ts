const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.stroke();

let i = 0;
let j = 0;

do {
    i++;
    let path = new Path2D();
    let size = Math.random() * 75 + 75;
    path.ellipse(Math.random() * 1600, Math.random() * 800, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill(path);
    //Random Color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    ctx.fillStyle = "#" + randomColor;

} while (i < Math.random() * 150 + 150);

do {
    j++;
    let path2 = new Path2D();
    let size2 = Math.random() * 75 + 75;
    let x = Math.random() * 1600;
    let y = Math.random() * 800;

    path2.rect(x, y, size2, size2);

    const gradient = ctx.createLinearGradient(x, 0, y*1.1, 0);
    gradient.addColorStop(0, Math.floor(Math.random() * 16777215).toString(16));
    gradient.addColorStop(0.5, Math.floor(Math.random() * 16777215).toString(16));
    gradient.addColorStop(1, Math.floor(Math.random() * 16777215).toString(16));
    ctx.fill(path2);
    ctx.fillStyle = gradient;

    

} while (j < Math.random() * 150 + 150);
