"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

drawBackground();
drawDots();

function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
}

function drawDots() {
    for (let i = 0; i < 10000; i++) {
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        if (x > width / 4 && x < width * 3 / 4 && y > height / 4 && y < height * 3 / 4) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "blue";
        }
        Utils.fillCircle(x, y, 2);
    }
}