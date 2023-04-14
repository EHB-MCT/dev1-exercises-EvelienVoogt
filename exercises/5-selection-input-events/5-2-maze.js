"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {
    context.fillStyle = "black";
    context.lineCap = "square";
    context.lineWidth = 5;
    context.fillRect(0, 0, width, height);
    let space = 10;
    for (let i = 0; i < width / space; i++) {
        for (let j = 0; j < height / space; j++) {
            let direction = Utils.randomNumber(0, 1);
            context.strokeStyle = Utils.hsla(Utils.randomNumber(0, 360), 100, 50, 1.0);
            if (direction == 0) {
                Utils.drawLine(i * space, j * space, (i + 1) * space, (j + 1) * space);
            } else {
                Utils.drawLine(i * space, (j + 1) * space, (i + 1) * space, j * space);
            } 
        }
    }
}