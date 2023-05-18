"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onkeydown = keyDown;

let bubbles = [];

setup();
draw();

function setup() {
    for (let i = 0; i < 5; i++) {
        addBubble();
    }
}

function draw() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        context.fillStyle = bubble.color;
        Utils.fillCircle(bubble.x, bubble.y, bubble.size);
        bubble.x += bubble.hSpeed;
        bubble.y += bubble.vSpeed;
        if (bubble.x >= width - bubble.size || bubble.x <= bubble.size) {
            bubble.hSpeed *= -1;
        }
        if (bubble.y >= height - bubble.size || bubble.y <= bubble.size) {
            bubble.vSpeed *= -1;
        }
    }
    requestAnimationFrame(draw);
}

/**
 * 
 * @param {KeyboardEvent} eventData 
 */
function keyDown(eventData) {
    addBubble();
}

function addBubble() {
    let randomSize = Utils.randomNumber(5, 50);
    let bubble = {
        size: randomSize,
        color: Utils.hsla(Utils.randomNumber(0, 360), 70, 50, 1.0),
        x: Utils.randomNumber(randomSize, width - randomSize),
        y: Utils.randomNumber(randomSize, height - randomSize),
        hSpeed: Utils.randomNumber(-10, 10),
        vSpeed: Utils.randomNumber(-10, 10),
    };
    bubbles.push(bubble);
}