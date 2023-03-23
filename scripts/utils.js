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
    return "rgb(" + r + "," + g + "," + b + ")";
}

/**
 * function to draw and fill a circle
 * @param {*} x x coordinate circle
 * @param {*} y y coordinate circle
 * @param {*} radius radius circle
 */
export function fillAndStrokeCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}

/**
 * draw and stroke Ellipse
 * @param {*} x x coordinate ellipse
 * @param {*} y y coordinate ellipse
 * @param {*} rX radius x ellipse
 * @param {*} rY radius y ellipse
 */
export function fillAndStrokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}