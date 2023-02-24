"use strict";

drawName();

function drawName() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //draw E
    context.lineWidth = 5;
    context.strokeStyle = "yellow";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(50, 200);
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.moveTo(50, 125);
    context.lineTo(125, 125);
    context.moveTo(50, 200);
    context.lineTo(150, 200);
    context.stroke();

    //draw v
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(175, 125);
    context.lineTo(200, 200);
    context.lineTo(225, 125);
    context.stroke();

    //draw e
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(250, 160);
    context.lineTo(300, 150);
    context.lineTo(275, 125);
    context.lineTo(250, 160);
    context.lineTo(270, 200);
    context.lineTo(300, 190);
    context.stroke();

    //draw l
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(325, 50);
    context.lineTo(325, 200);
    context.lineTo(350, 200);
    context.stroke();

    //draw i
    context.lineWidth = 5;
    context.strokeStyle = "fuchsia";
    context.beginPath();
    context.moveTo(375, 125);
    context.lineTo(375, 200);
    context.moveTo(375, 100);
    context.lineTo(375, 90);
    context.stroke();

    //draw e again
    context.lineWidth = 5;
    context.strokeStyle = "lime";
    context.beginPath();
    context.moveTo(400, 160);
    context.lineTo(450, 150);
    context.lineTo(425, 125);
    context.lineTo(400, 160);
    context.lineTo(415, 200);
    context.lineTo(450, 190);
    context.stroke();

    //draw n
    context.lineWidth =5;
    context.strokeStyle = "orange";
    context.beginPath();
    context.moveTo(475, 125);
    context.lineTo(475, 200);
    context.moveTo(475, 150);
    context.lineTo(490, 125);
    context.lineTo(525, 125);
    context.lineTo(525, 200);
    context.stroke();

}