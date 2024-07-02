const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface Bird {
    x: number,
    y: number,
    size: number,
    color: string,
    speed: number,
}

let birds: Bird[] = createBirds(25);
drawBirds();

function createBirds(_amount: number): Bird[] {
    let birds: Bird[] = [];
    for (let i: number = 0; i < _amount; i++) {
        let bird: Bird = {
            x: Math.random() * 600,
            y: Math.random() * 600,
            size: Math.random() * 50 + 10,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            speed: Math.random()*1+1,
        }
        birds.push(bird);
    }
    return birds;
}

function drawBird(_bird: Bird): void {
    let path: Path2D = new Path2D();
    path.rect(_bird.x, _bird.y, _bird.size, _bird.size);
    ctx.fillStyle = _bird.color;
    ctx.fill(path);
}

function drawBirds(): void {
    for (let i: number = 0; i < birds.length; i++) {
        let bird = birds[i];
        drawBird(bird);
    }
}

function updateBirds() {
    for (let i: number = 0; i < birds.length; i++) {
        birds[i].x += Math.random()*birds[i].speed+birds[i].speed;
        if (birds[i].x > 600) {
            birds[i].x = -birds[i].size;
        }
    }
}

function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBirds();
    drawBirds();
    requestAnimationFrame(animationFrame);
}

requestAnimationFrame(animationFrame);