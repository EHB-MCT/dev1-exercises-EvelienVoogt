"use strict";

drawStarryNight();

function drawStarryNight() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 8;
    //rectangle
    context.fillStyle = "orange";
    context.strokeStyle = "white";
    context.beginPath();
    context.moveTo(200,50);
    context.lineTo(350,200);
    context.lineTo(200,350);
    context.lineTo(50, 200);
    context.lineTo(200,50);
    context.fill();
    context.stroke();
    
    //circles
    context.fillStyle = "white";
    context.beginPath();
    context.arc(50, 50, 150, 0, Math.PI / 2);
    context.fill();
    
    context.beginPath();
    context.arc(350, 50, 150, Math.PI / 2, Math.PI);
    context.fill();

    context.beginPath();
    context.arc(350, 350, 150, Math.PI * 1.5, Math.PI, true);
    context.fill();

    context.beginPath();
    context.arc(50, 350, 150, 0, Math.PI * 1.5, true);
    context.fill();

    //strokes
    context.strokeStyle = "white";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(350, 350);
    context.stroke();

    context.beginPath();
    context.moveTo(85, 50);
    context.lineTo(350, 315);
    context.stroke();

    context.beginPath();
    context.moveTo(120, 50);
    context.lineTo(350, 280);
    context.stroke();

    context.beginPath();
    context.moveTo(50, 85);
    context.lineTo(315, 350);
    context.stroke();

    context.beginPath();
    context.moveTo(50, 120);
    context.lineTo(280, 350);
    context.stroke();

    context.beginPath();
    context.moveTo(350, 50);
    context.lineTo(50, 350);
    context.stroke();

    context.beginPath();
    context.moveTo(315, 50);
    context.lineTo(50, 315);
    context.stroke();

    context.beginPath();
    context.moveTo(280, 50);
    context.lineTo(50, 280);
    context.stroke();

    context.beginPath();
    context.moveTo(350, 85);
    context.lineTo(85, 350);
    context.stroke();

    context.beginPath();
    context.moveTo(350, 120);
    context.lineTo(120, 350);
    context.stroke();

    //inner rectangle
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.beginPath();
    context.moveTo(200, 165);
    context.lineTo(235, 200);
    context.lineTo(200, 235);
    context.lineTo(165, 200);
    context.lineTo(200, 165);
    context.fill();
    context.stroke();

    //rectangle
    context.strokeStyle = "orange";
    context.lineWidth = 8;
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.stroke();
}