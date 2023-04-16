"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = width / 2;
let y = height - 35;
let playing = true;
let speed = 10;
let xCar1 = 0;
let yCar1 = height / 2 - 200;
let xCar2 = width - 200;
let yCar2 = height / 2 + 100;
let car1Speed = 5;
let car2Speed = -5;

window.onkeydown = getKey;
context.textAlign = "center";
context.font = "bold 50pt Arial";

/**
 * 
 * @param {KeyboardEvent} eventData 
 */
function getKey(eventData) {
    if (eventData.key == "ArrowUp") {
        if (y <= 65) {
            playing = false;
            context.fillStyle = "darkgreen";
            context.fillText("You won", width / 2, height / 2 + 25);
        }
        y -= speed;
    }
    if (eventData.key == "ArrowDown") {
        y += speed;
    }
    if (eventData.key == "ArrowLeft") {
        x -= speed;
    }
    if (eventData.key == "ArrowRight") {
        x += speed;
    }
}

setup();

function setup(){
    if (playing) {
        background();
        drawFrog();
        drawCar(xCar1, yCar1);
        drawCar(xCar2, yCar2);
        moveCars();
        hitByCar();
        requestAnimationFrame(setup);
    }
}
function background() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "darkgrey";
    context.fillRect(0, height / 2 - 225, width, 150 * 3);
    context.fillStyle = "lightgrey";
    context.fillRect(0, height / 2 - 75, width, 150);
}

function hitByCar() {
    if ((x - 30 > xCar1 && x + 30 < xCar1 + 200) && (y - 30 > yCar1 && y + 30 < yCar1 + 100)) {
        showYouLose();
    }
    if ((x - 30 > xCar2 && x + 30 < xCar2 + 200) && (y - 30 > yCar2 && y + 30 < yCar2 + 100)) {
        showYouLose();
    }
}

function showYouLose() {
    playing = false;
    context.fillStyle = "red";
    context.fillText("You lose", width / 2, height / 2 + 25);
}

function moveCars() {
    if (xCar1 > width - 200) {
        car1Speed *= -1
    } else if (xCar1 < 0) {
        car1Speed *= -1;
    }
    if (xCar2 > width - 200) {
        car2Speed *= -1;
    } else if (xCar2 < 0) {
        car2Speed *= -1;
    }
    xCar1 += car1Speed;
    xCar2 += car2Speed;
}

function drawCar(x, y) {
    context.fillStyle = "red";
    context.fillRect(x, y, 200, 100);
    context.fillStyle = "lightblue";
    context.fillRect(x + 10, y + 10, 20, 80);
    context.fillRect(x + 140, y + 10, 50, 80);
}

function drawFrog() {
    context.fillStyle = "darkgreen";
    Utils.fillCircle(x, y, 30);
    Utils.fillCircle(x, y -40, 20);
    Utils.fillCircle(x - 30, y - 25, 10);
    Utils.fillCircle(x - 30, y + 25, 10);
    Utils.fillCircle(x + 30, y - 25, 10);
    Utils.fillCircle(x + 30, y + 25, 10);

}