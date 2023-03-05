"use strict";

let context;

setup();
rectangles(0, 0, 400, 400);
rectangles(25, 25, 350, 350);
rectangles(50, 50, 300, 300);
rectangles(75, 75, 250, 250);
rectangles(100, 100, 200, 200);
rectangles(125, 125, 150, 150);
rectangles(150, 150, 100, 100);
rectangles(175, 175, 50, 50);


function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}


function rectangles(x, y, recWidth, recHeight) {
    context.fillStyle = "hsl" + "(" + Math.round(Math.random() * 360) + "," + "100%" + "," + "50%" +")";
    context.fillRect(x, y, recWidth, recHeight);
}