"use strict";
import context from "./context.js";

/**
 * function to draw lines
 * @param {*} x1 x coordinate of start line
 * @param {*} y1 y coordinate of start line
 * @param {*} x2 x coordinate of end line
 * @param {*} y2 y coordinate of end line
 */
export function drawLine(x1, y1, x2, y2) {
    context.beginPath;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

/**
 * function to stroke a circle
 * @param {*} x x coordinate circle
 * @param {*} y y coordinate circle
 * @param {*} r radius circle
 */
export function strokeCircle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.stroke();
}

export function rgb(r, g, b) {
    context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
}