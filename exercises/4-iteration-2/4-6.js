"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = window.innerWidth;
let height = window.innerHeight;
let total = 500;

drawBackground();
drawNoiseInCircle();

function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
}

function drawNoiseInCircle() {
    for (let i = 0; i < 50; i++) {
        context.fillStyle = Utils.hsla(i * 10, 100, 50, 1.0);
        for (let j = 0; j < total; j++) {
            let x = (width / 2) - (total / 2) + j;
            let y = Noise.perlinNoise(j / 400) * total;
            Utils.fillCircle(x, y + i * 15, 3);
        }
    }
        //draw a cover
        context.fillStyle = "black";
        context.lineWidth = 150;
        Utils.strokeCircle(width / 2, height / 2, 300);
        context.fillRect(0, 0, width, 200);
        context.fillRect(0, height - 200, width, 200);
        
        //show Noise Seed
        context.textAlign = "center";
        context.fillStyle = "white";
        context.font = "12pt Arial";
        context.fillText(Noise.getSeed(), width / 2, height - 100);
}