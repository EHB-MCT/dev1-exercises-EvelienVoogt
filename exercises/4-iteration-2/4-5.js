"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRandomLinesAndText();
drawPosterText();
drawBlack();

function drawRandomLinesAndText() {
    for (let i = 0; i < 200; i++) {
        let color = Utils.hsla(0, 0, Math.floor(Math.random() * 100), 0.5);
        let y1 = Math.random() * height;
        let y2 = Math.random() * height;
        context.lineWidth = 10 + Math.random() * 20;
        context.strokeStyle = color;
        Utils.drawLine(0, y1, width, y2);

        let fontSize = Math.floor(Math.random() * 75);
        context.fillStyle = color;
        context.font = fontSize + "px Arial";
        context.fillText("MCT", Math.random() * width, Math.random() * height);
    }
}

function drawPosterText() {
    context.textAlign = "center";
    context.fillStyle = "black";
    context.font = "100px Arial";
    context.fillText("MCT", width / 2, height / 2);
    context.fillStyle = "red";
    context.font = "50px Arial";
    context.fillText("EHB", width / 2, height / 2 - 100);
    context.fillStyle = "white";
    context.font = "50px Arial";
    context.fillText("is cool", width / 2, height / 2 + 50);

}

function drawBlack() {
    context.strokeStyle = "black";
    context.lineWidth = 500;
    context.beginPath();
	context.moveTo(width / 2, -250);
	context.lineTo(width + 250, height / 2);+
    context.lineTo(width / 2, height + 250);
    context.lineTo(-250, height / 2);
    context.lineTo(width / 2, -250);
	context.stroke();

}