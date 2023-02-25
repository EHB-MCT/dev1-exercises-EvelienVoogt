"use strict";

drawSunset();

function drawSunset() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

//rectangle
context.fillStyle = "orange";
context.fillRect(50, 50, 300, 300);

//sun
context.fillStyle = "yellow";
context.beginPath();
context.arc(200, 250, 100, 100, 0, Math.PI * 2);
context.fill();

//blue rectangle
context.fillStyle = "blue";
context.fillRect(50, 250, 300, 100);

}