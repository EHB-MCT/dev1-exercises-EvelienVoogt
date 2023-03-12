"use strict";

let context;

setup();
mondriaan();


function setup() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
}

function mondriaan() {
    context.fillStyle = "#F5F5F5";
    context.fillRect(0, 0, innerWidth, innerWidth);
    
    context.fillStyle = "#191970";
    context.fillRect(0, 0, innerWidth / 3, innerHeight * (4 / 6));

    context.fillRect(innerWidth * (2 / 3), 0, innerWidth / 3, innerHeight * (4 / 6));

    context.fillStyle = "#DC143C";
    context.fillRect(0, innerHeight * (1 / 6), innerWidth, innerHeight * (2 / 6));

    context.fillStyle = "#00BFFF";
    context.fillRect(0, innerHeight * (4 / 6), innerWidth / 3, innerHeight * (2 / 6));

    context.fillRect(innerWidth * (2 / 3), innerHeight * (4 / 6), innerWidth / 3, innerHeight * (2 / 6));

}