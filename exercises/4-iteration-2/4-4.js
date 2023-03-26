"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {
    context.fillStyle = Utils.hsla(195, 100, 50, 0.4);
    context.strokeStyle = Utils.hsla(195, 100, 50, 0.0);
    let total = 10;
    for (let i= 0; i <= total; i++) {
        for (let j = 0; j <= total; j++) {
            let x = i * (innerWidth / 10);
            let y = j * (innerHeight / 10);
            let radius = Math.floor(Math.random() * 60);
            Utils.fillAndStrokeCircle(x, y, radius);
        }
    }
}