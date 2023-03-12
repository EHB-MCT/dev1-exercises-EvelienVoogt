"use strict";

let context;

setup();
sunset();

function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function sunset() {
    context.fillStyle = "#FFD700";
    context.fillRect(0, 0, innerWidth, innerHeight / 4);

    context.fillStyle = "#FF8C00";
    context.fillRect(0, innerHeight / 4, innerWidth, innerHeight / 4);

    context.fillStyle = "#FF0000";
    context.fillRect(0, innerHeight / 2, innerWidth, innerHeight / 4);

    context.fillStyle = "#FFFFE0";
    context.beginPath();
    context.arc(innerWidth / 2, innerHeight * (3 / 4), innerWidth / 4, 0, Math.PI, true);
    context.fill();

    context.fillStyle = "#000080";
    context.fillRect(0, innerHeight * (3 / 4), innerWidth, innerHeight / 4);

}