"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
// Background
let k = 0;
do {
    k++;
    let pathBG = new Path2D();
    let size = Math.random() * 75 + 720;
    pathBG.ellipse(Math.random() * 1900, Math.random() * 100 + 1350, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#b2beb5";
    ctx.fill(pathBG);
} while (k < 10);
// Middleground
let j = 0;
do {
    j++;
    let pathMG = new Path2D();
    let size = Math.random() * 75 + 420;
    pathMG.ellipse(Math.random() * 1900, Math.random() * 100 + 1150, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#7bb661";
    ctx.fill(pathMG);
} while (j < 20);
// Foreground
let i = 0;
do {
    i++;
    let pathFG = new Path2D();
    let size = Math.random() * 75 + 120;
    pathFG.ellipse(Math.random() * 1900, Math.random() * 100 + 1000, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#4f7942";
    ctx.fill(pathFG);
} while (i < 120);
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
let clouds = [];
for (let w = 0; w < 3; w++) {
    clouds.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 100 + 100,
        scaleX: Math.random() * 1 + 4,
        scaleY: Math.random() * 1 + 7,
        cloudD: Math.random() * 25 + 35,
        color: Math.random() * 25 + 205,
    });
}
function drawCloud() {
    for (let c = 0; c < clouds.length; c++) {
        let pathCloud = new Path2D();
        pathCloud.ellipse(clouds[c].positionX, clouds[c].positionY, 10 * clouds[c].scaleX, 10 * clouds[c].scaleY, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(" + clouds[c].color + ", " + clouds[c].color + "," + clouds[c].color + ")";
        ctx.fill(pathCloud);
        for (let cl = 0; cl < clouds[c].cloudD; cl++) {
            let pathCD = new Path2D;
            pathCD.ellipse(clouds[c].positionX + (Math.random() * 200) - (Math.random() * 200), clouds[c].positionY + (Math.random() * 100) - (Math.random() * 75), 10 * clouds[c].scaleX, 10 * clouds[c].scaleY, Math.PI / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "rgb(" + clouds[c].color + ", " + clouds[c].color + "," + clouds[c].color + ")";
            ctx.fill(pathCD);
        }
    }
}
let trees = [];
for (let b = 0; b < 9; b++) {
    trees.push({
        positionX: Math.random() * 1920,
        positionY: Math.random() * 200 + 400,
        scaleX: Math.random() * 1 + 2,
        scaleY: Math.random() * 1 + 1,
        leaves: Math.random() * 25 + 35,
        color: "#80755a",
        colorR: Math.random() * 25 + 55,
        colorG: Math.random() * 45 + 95,
        colorB: Math.random() * 75 + 15,
        hasLeaves: true,
    });
}
function drawTree() {
    for (let t = 0; t < trees.length; t++) {
        let pathTree = new Path2D();
        pathTree.rect(trees[t].positionX, trees[t].positionY, 10 * trees[t].scaleX, 500 * trees[t].scaleY);
        ctx.fillStyle = trees[1].color;
        ctx.fill(pathTree);
        for (let l = 0; l < trees[t].leaves; l++) {
            let pathLeaf = new Path2D;
            pathLeaf.ellipse(trees[t].positionX + (Math.random() * 100) - (Math.random() * 100), trees[t].positionY + (Math.random() * 150) - (Math.random() * 100), Math.random() * 50 + 25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI);
            ctx.fillStyle = "rgb(" + trees[t].colorR + ", " + trees[t].colorG + "," + trees[t].colorB + ")";
            ctx.fill(pathLeaf);
        }
    }
}
drawCloud();
drawTree();
