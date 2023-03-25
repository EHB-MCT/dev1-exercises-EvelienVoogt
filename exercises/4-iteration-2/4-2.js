"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, innerWidth, innerHeight);
    drawBubbles();
}

function drawBubbles() {
    let margin = 200;
    for (let i = 0; i <= 100; i++) {
        
        let x = margin + Math.floor(Math.random() * (innerWidth - margin * 2));
        let y = margin + Math.floor(Math.random() * (innerHeight - margin * 2));
        let radius = Math.floor(Math.random() * 50);
        let color = Math.floor(Math.random() * 360);

        context.fillStyle = Utils.hsla(color, 100, 50, 0.4);
        context.strokeStyle = Utils.hsla(color, 100, 50, 0.0);
        Utils.fillAndStrokeCircle(x, y, radius);    
    }

}