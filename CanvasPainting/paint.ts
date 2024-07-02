const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
type RGB = `rgb(${number}, ${number}, ${number})`;


// Sun
let s = 0;
do {
    s++;
    let pathSun = new Path2D();
    let size = Math.random() * 5 + 50;
    pathSun.ellipse(Math.random() * 50 + 1500, Math.random() * 50 + 100, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffe0";
    ctx.fill(pathSun);
} while (s < 1);


// Clouds Foreground
interface CloudAttributes {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    cloudD: number;
    color: number;
    speed: number;
}

let clouds: CloudAttributes[] = [];
let cloudsBG: CloudAttributes[] = [];

    // Clouds
    for (let i: number = 0; i < 3; i++) {
        clouds.push({
            positionX: Math.random() * 1920,
            positionY: Math.random() * 100 + 100,
            scaleX: Math.random() * 1 + 4,
            scaleY: Math.random() * 1 + 7,
            cloudD: Math.random() * 25 + 35,
            color: Math.random() * 25 + 205,
            speed: 1,
        });
    }

    // Clouds
    for (let i: number = 0; i < 8; i++) {
        cloudsBG.push({
            positionX: Math.random() * 1920,
            positionY: Math.random() * 50 + 150,
            scaleX: Math.random() * 1 + 2,
            scaleY: Math.random() * 1 + 5,
            cloudD: Math.random() * 25 + 75,
            color: Math.random() * 25 + 175,
            speed: 0.5,
        });
    }


function drawClouds() {
    function drawCloud(): void {
        for (let c: number = 0; c < clouds.length; c++) {
            let pathCloud = new Path2D();
            pathCloud.ellipse(clouds[c].positionX, clouds[c].positionY, 10 * clouds[c].scaleX, 10 * clouds[c].scaleY, Math.PI / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "rgb(" + clouds[c].color + ", " + clouds[c].color + "," + clouds[c].color + ")";
            ctx.fill(pathCloud);
            for (let cl: number = 0; cl < clouds[c].cloudD; cl++) {
                let pathCD = new Path2D;
                pathCD.ellipse(clouds[c].positionX + (Math.random() * 200) - (Math.random() * 200), clouds[c].positionY + (Math.random() * 100) - (Math.random() * 75), 10 * clouds[c].scaleX, 10 * clouds[c].scaleY, Math.PI / 2, 0, 2 * Math.PI);
                ctx.fillStyle = "rgb(" + clouds[c].color + ", " + clouds[c].color + "," + clouds[c].color + ")";
                ctx.fill(pathCD);
            }
        }
    }


    function drawCloudBG(): void {
        for (let cbg: number = 0; cbg < cloudsBG.length; cbg++) {
            let pathCloudBG = new Path2D();
            pathCloudBG.ellipse(cloudsBG[cbg].positionX, cloudsBG[cbg].positionY, 10 * cloudsBG[cbg].scaleX, 10 * cloudsBG[cbg].scaleY, Math.PI / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "rgb(" + cloudsBG[cbg].color + ", " + cloudsBG[cbg].color + "," + cloudsBG[cbg].color + ")";
            ctx.fill(pathCloudBG);

            for (let clbg: number = 0; clbg < cloudsBG[cbg].cloudD; clbg++) {
                let pathCDBG = new Path2D;
                pathCDBG.ellipse(cloudsBG[cbg].positionX + (Math.random() * 100) - (Math.random() * 100), cloudsBG[cbg].positionY + (Math.random() * 50) - (Math.random() * 35), 10 * cloudsBG[cbg].scaleX, 10 * cloudsBG[cbg].scaleY, Math.PI / 2, 0, 2 * Math.PI);
                ctx.fillStyle = "rgb(" + cloudsBG[cbg].color + ", " + cloudsBG[cbg].color + "," + cloudsBG[cbg].color + ")";
                ctx.fill(pathCDBG);
            }
        }
    }

    drawCloudBG();
    drawCloud();

}

// Background
function drawBgScene() {

    let k = 0;
    do {
        k++;
        let bgR = Math.random() * 15 + 155;
        let bgG = Math.random() * 15 + 195;
        let bgB = Math.random() * 15 + 175;
        let pathBG = new Path2D();
        let size = Math.random() * 75 + 720;
        pathBG.ellipse(Math.random() * 1900, Math.random() * 100 + 1350, size, size, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(" + bgR + ", " + bgG + "," + bgB + ")";
        ctx.fill(pathBG);
    } while (k < 10);


    // Middleground
    let j = 0;
    do {
        j++;
        let mgR = Math.random() * 20 + 85;
        let mgG = Math.random() * 25 + 155;
        let mgB = Math.random() * 45 + 75;
        let pathMG = new Path2D();
        let size = Math.random() * 75 + 420;
        pathMG.ellipse(Math.random() * 1900, Math.random() * 100 + 1150, size, size, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(" + mgR + ", " + mgG + "," + mgB + ")";
        ctx.fill(pathMG);
    } while (j < 20);



    interface TreeAttributesMG {
        positionX: number;
        positionY: number;
        scaleX: number;
        scaleY: number;
        leaves: number;
        color: string;
        colorR: number;
        colorG: number;
        colorB: number;
        hasLeaves: boolean;
    }

    let treesMG: TreeAttributesMG[] = [];

    for (let b: number = 0; b < 12; b++) {
        treesMG.push({
            positionX: Math.random() * 1920,
            positionY: Math.random() * 150 + 400,
            scaleX: Math.random() * 1 + 1,
            scaleY: Math.random() * 1 + 1,
            leaves: Math.random() * 25 + 35,
            color: "#80755a",
            colorR: Math.random() * 20 + 75,
            colorG: Math.random() * 25 + 145,
            colorB: Math.random() * 45 + 65,
            hasLeaves: true,
        });
    }

    function drawTreeMG(): void {
        for (let t: number = 0; t < treesMG.length; t++) {
            let pathTreeMG = new Path2D();
            pathTreeMG.rect(treesMG[t].positionX, treesMG[t].positionY, 10 * treesMG[t].scaleX, 500 * treesMG[t].scaleY);
            ctx.fillStyle = treesMG[1].color;
            ctx.fill(pathTreeMG);

            for (let l: number = 0; l < treesMG[t].leaves; l++) {
                let pathLeafMG = new Path2D;
                pathLeafMG.ellipse(treesMG[t].positionX + (Math.random() * 70) - (Math.random() * 70), treesMG[t].positionY + (Math.random() * 100) - (Math.random() * 70), Math.random() * 15 + 25, Math.random() * 15 + 25, Math.PI / 2, 0, 2 * Math.PI)
                ctx.fillStyle = "rgb(" + treesMG[t].colorR + ", " + treesMG[t].colorG + "," + treesMG[t].colorB + ")";
                ctx.fill(pathLeafMG);
            }
        }
    }

    drawTreeMG();

    // Foreground
    let i = 0;
    do {
        i++;
        let fgR = Math.random() * 25 + 55;
        let fgG = Math.random() * 45 + 95;
        let fgB = Math.random() * 75 + 15;
        let pathFG = new Path2D();
        let size = Math.random() * 75 + 120;
        pathFG.ellipse(Math.random() * 1900, Math.random() * 100 + 1000, size, size, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(" + fgR + ", " + fgG + "," + fgB + ")";
        ctx.fill(pathFG);
    } while (i < 120);

    interface TreeAttributes {
        positionX: number;
        positionY: number;
        scaleX: number;
        scaleY: number;
        leaves: number;
        color: string;
        colorR: number;
        colorG: number;
        colorB: number;
        hasLeaves: boolean;
    }

    let trees: TreeAttributes[] = [];

    for (let b: number = 0; b < 5; b++) {
        trees.push({
            positionX: Math.random() * 1920,
            positionY: Math.random() * 200 + 250,
            scaleX: Math.random() * 1 + 2,
            scaleY: Math.random() * 1 + 1.2,
            leaves: Math.random() * 25 + 45,
            color: "#654321",
            colorR: Math.random() * 25 + 35,
            colorG: Math.random() * 45 + 75,
            colorB: Math.random() * 65 + 5,
            hasLeaves: true,
        });
    }

    function drawTree(): void {
        for (let t: number = 0; t < trees.length; t++) {
            let pathTree = new Path2D();
            pathTree.rect(trees[t].positionX, trees[t].positionY, 10 * trees[t].scaleX, 500 * trees[t].scaleY);
            ctx.fillStyle = trees[1].color;
            ctx.fill(pathTree);

            for (let l: number = 0; l < trees[t].leaves; l++) {
                let pathLeaf = new Path2D;
                pathLeaf.ellipse(trees[t].positionX + (Math.random() * 100) - (Math.random() * 100), trees[t].positionY + (Math.random() * 250) - (Math.random() * 100), Math.random() * 50 + 25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI)
                ctx.fillStyle = "rgb(" + trees[t].colorR + ", " + trees[t].colorG + "," + trees[t].colorB + ")";
                ctx.fill(pathLeaf);
            }
        }
    }
    drawTree();
}

drawBgScene();
let imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

function updateClouds(_deltaTime: number) {
    for (let i: number = 0; i < clouds.length; i++) {
        clouds[i].positionX += Math.random()*clouds[i].speed + clouds[i].speed;
        cloudsBG[i].positionX += Math.random()*cloudsBG[i].speed + cloudsBG[i].speed;
        if (clouds[i].positionX > canvas.width) {
            clouds[i].positionX = -clouds[i].scaleX;
        }
    }
}

let previousFrameTime: number = 0;
function animateScene(_elapsedTime: number) {
    let currentFrameDeltaTime: number = (_elapsedTime - previousFrameTime) / 1000;
    previousFrameTime = _elapsedTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
    updateClouds(currentFrameDeltaTime);
    drawClouds();
    requestAnimationFrame(animateScene);
}

requestAnimationFrame(animateScene);