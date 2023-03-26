"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
    let total = 10;
    for (let i= 0; i <= total; i++) {
        for (let j = 0; j <= total; j++) {
            context.fillStyle = Utils.hsla((j % 2) * 200, 100, 50, 0.4);
            context.strokeStyle = Utils.hsla((j % 2) * 200, 100, 50, 0.0);
            let x = i * (innerWidth / 10);
            let y = j * (innerHeight / 10);
            let radius = 35;
            Utils.fillAndStrokeCircle(x, y, radius);
        }
    }
}