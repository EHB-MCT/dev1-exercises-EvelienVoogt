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
 * hsla function
 * @param {*} h value for hue
 * @param {*} s value for saturation
 * @param {*} l value for lightness
 * @param {*} a value for alpha (0.0 fully transparent, 1.0 not transparent)
 * @returns 
 */  
export function hsla(h, s, l, a){
    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")"; 
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
 * function to fill a circle
 * @param {*} x x coordinate circle
 * @param {*} y y coordinate circle
 * @param {*} radius radius circle
 */
export function fillCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
}

/**
 * Draws a filled ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse 
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
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

/**
 * calculate random number between min and max
 * @param {*} min minimum value
 * @param {*} max maximum value
 */
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * calculates the distance between 2 coordinates
 * @param {*} x1 x coordinate of first point
 * @param {*} y1 y coordinate of first point
 * @param {*} x2 x coordinate of second point
 * @param {*} y2 y coordinate of second point
 */
export function calculateDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}