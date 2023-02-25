"use strict";

drawMultipleRectangles();

function drawMultipleRectangles() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
    
    //left upper box
    context.lineWidth = 2;
    context.strokeStyle = "pink";
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();

    //right under box
    context.beginPath();
    context.rect(200, 200, 150, 150);
    context.stroke();

    //right upper box
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.stroke();

    //left under box
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.stroke();

    //inner box black
    context.fillStyle = "black";
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.stroke();
    context.fill();

    //right upper box black
    context.beginPath();
    context.rect(325, 50, 25, 25);
    context.fill();

    //left under box black
    context.beginPath();
    context.rect(50, 325, 25, 25);
    context.fill();
}