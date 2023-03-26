"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
    context.fillStyle = "lightblue";
    context.strokeStyle = "lightblue";
    let total = 10;
    for (let i= 0; i <= total; i++) {
        for (let j = 0; j <= total; j++) {
            let x = i * (innerWidth / 10);
            let y = j * (innerHeight / 10);
            Utils.fillAndStrokeCircle(x, y, 35);
        }
    }
}