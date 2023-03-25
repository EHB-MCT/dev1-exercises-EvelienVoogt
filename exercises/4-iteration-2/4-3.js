"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

brickWall();

function brickWall() {
    context.fillStyle = "darkred";
    let total = 6;
    for (let i= 0; i <= total; i++) {
        for (let j = 0; j <= total; j++) {
            let x = 50 + (j % 2) * 50;
            context.fillRect(x + i * 105, 50 + j * 55, 100, 50);
        }
    }
}