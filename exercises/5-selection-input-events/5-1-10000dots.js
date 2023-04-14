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
        let distance = Utils.calculateDistance(x, y, width / 2, height / 2);
        if (distance < 300) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 2);
    }
}