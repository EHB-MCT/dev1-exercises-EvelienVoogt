"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = width / 2;
let y = height / 2;
let xSpeed = 5;
let ySpeed = 5;
let size = 30;
let bouncing = true;

window.onmousedown = stop;

/**
 * 
 * @param {MouseEvent} eventdata 
 */
function stop(eventdata) {
    if (Utils.calculateDistance(eventdata.pageX, eventdata.pageY, x, y) < size) {
        bouncing = false;
        context.fillStyle = "red";
        Utils.fillCircle(eventdata.pageX, eventdata.pageY, size / 2);
    }
}

update();

function update() {
    if (bouncing) {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "blue";
        Utils.fillCircle(x, y, size);
        x += xSpeed;
        y += ySpeed;
        if (x >= width - size || x <= size) {
            xSpeed *= -1;
        }
        if (y >= height - size || y <= size) {
            ySpeed *= -1;
        }
    }
    requestAnimationFrame(update);
}