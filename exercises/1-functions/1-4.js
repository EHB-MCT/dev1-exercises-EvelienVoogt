"use strict";

drawSomeLayers();

function drawSomeLayers() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //biggest rectangle
    context.lineWidth = 2;
    context.fillStyle = 'lightblue';
    context.rect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    //second rectangle
    context.rect(50, 50, 250, 250);
    context.fill();
    context.stroke();

    //third rectangle
    context.rect(100, 50, 200, 200);
    context.fill();
    context.stroke();

    //fourth rectangle
    context.rect(150, 100, 150, 150);
    context.fill();
    context.stroke();

    //last rectangle
    context.rect(150,150, 100, 100);
    context.fill();
    context.stroke();
}