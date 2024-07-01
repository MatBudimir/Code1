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
    ctx.fill(pathBG);
    ctx.fillStyle = "#999";
} while (k < 10);
// Middleground
let j = 0;
do {
    j++;
    let pathMG = new Path2D();
    let size = Math.random() * 75 + 420;
    pathMG.ellipse(Math.random() * 1900, Math.random() * 100 + 1150, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill(pathMG);
    ctx.fillStyle = "#666";
} while (j < 20);
// Foreground
let i = 0;
do {
    i++;
    let pathFG = new Path2D();
    let size = Math.random() * 75 + 120;
    pathFG.ellipse(Math.random() * 1900, Math.random() * 100 + 1000, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill(pathFG);
    ctx.fillStyle = "#333";
} while (i < 120);
// Sun
let s = 0;
do {
    s++;
    let pathSun = new Path2D();
    let size = Math.random() * 5 + 50;
    pathSun.ellipse(Math.random() * 50 + 1500, Math.random() * 50 + 100, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill(pathSun);
    ctx.fillStyle = "#999";
} while (s < 1);
