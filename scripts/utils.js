"use strict";
import context from "./context.js";

/**
 * 
 * @param {*} x1 x coordinate of starte line
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