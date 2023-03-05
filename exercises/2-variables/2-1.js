"use strict";

let context;
let margin = 50;

setup();
drawLine();

function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function drawLine() {
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(margin, 50);
    context.lineTo(innerWidth - margin, 50);
    context.lineTo(margin, 100);
    context.lineTo(innerWidth - margin, 100);
    context.lineTo(margin, 150,);
    context.lineTo(innerWidth - margin, 150);
    context.lineTo(margin, 200);
    context.lineTo(innerWidth - margin, 200);
    context.lineTo(margin, 250);
    context.lineTo(innerWidth - margin, 250);
    context.lineTo(margin, 50);
    context.stroke();
}