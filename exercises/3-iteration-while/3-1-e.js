"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 50;
    while (i <= 200) {
        Utils.drawLine(i, 150 + i, 150 + i, i);
        Utils.drawLine(i, 250 - i, 150 + i, 400 - i);
        i += 25;
    }
}