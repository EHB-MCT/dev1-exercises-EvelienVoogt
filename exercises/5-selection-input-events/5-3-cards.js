"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


document.getElementById("draw").onclick = drawCards;

function background() {
    context.fillStyle = "darkgreen";
    context.fillRect(0, 0, width, height);
}

function drawCards() {
    background();
    let value = Number(document.getElementById("input1").value);
    let r = Utils.randomNumber(0, value);
    for (let i = 0; i < value; i++) {
        drawCard(75 + i % 10 * 125, 150 + Math.floor(i / 10) * 175, r == i);
    }
}

function drawCard(x, y, pick) {
    let r = Math.floor(Math.random() * 13 + 1);
    context.lineWidth = 2;
    if (pick) {
        context.fillStyle = "yellow";
    } else {
        context.fillStyle = "white";
    }
    context.beginPath();
    context.rect(x - 50, y - 50, 100, 150);
    context.fill();
    context.stroke();
    context.textAlign = "center";
    context.font = "bold 32pt Arial";
    drawRandomShape(x, y);
    if (r <= 10) {
        context.fillText(r, x, y + 75);
    } else if (r == 11) {
        context.fillText("J", x, y + 75);
    } else if (r == 12) {
        context.fillText("Q", x, y + 75);
    } else if (r == 13) {
        context.fillText("K", x, y + 75);
    }
}

function drawRandomShape(x, y) {
    let r = Math.floor(Math.random() * 4);
    if (r == 0) {
        context.fillStyle = "red";
        drawHeart(x, y);
    } else if (r == 1) {
        context.fillStyle = "red";
        drawDiamond(x, y);
    } else if (r == 2) {
        context.fillStyle = "black";
        drawClover(x, y);
    } else if (r == 3) {
        context.fillStyle = "black";
        drawPike(x, y);
    }
}

/*background();
document.getElementById("draw").onclick = pickACard;

function background() {
    context.fillStyle = "darkgreen";
    context.fillRect(0, 0, width, height);
}

function pickACard(){
    let value = Number(document.getElementById("value").value);
    for (let i = 0; i <= value; i++) {
        drawCard(50 + i * 125, 100 + (i % 2) * 175);
    }
}

function drawCard(x, y) {
    let cardNumber = Utils.randomNumber(1, 13);
    context.lineWidth = 2;
    context.fillStyle = "white";
    context.beginPath();
    context.rect(x, y, 100, 150);
    context.fill();
    context.stroke();
    context.textAlign = "center";
    context.font = "20pt Arial";
    drawShape(x, y);
    if (cardNumber <= 10) {
        context.fillText(cardNumber, x, y + 50);
    } else if (cardNumber == 11) {
        context.fillText("J", x, y + 50);
    } else if (cardNumber == 12) {
        context.fillText("Q", x, y + 50);
    } else {
        context.fillText("K", x, y + 50);
    }
    
}

function drawShape() {
    let shape = Utils.randomNumber(1, 4);
    if (shape == 1) {
        context.fillStyle = "red";
        drawHeart(x, y);
    } else if (shape == 2) {
        context.fillStyle = "black";
        drawClover(x, y);
    } else if (shape == 3) {
        context.fillStyle = "black";
        drawPike(x, y);
    } else {
        context.fillStyle = "red";
        drawDiamond(x, y);
    }
}*/

function drawHeart(x, y) {
    context.beginPath();
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x + 40, y - 15, x, y + 20);
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x - 40, y - 15, x, y + 20);
    context.fill();
}

function drawClover(x, y) {
    Utils.fillCircle(x - 10, y + 5, 10);
    Utils.fillCircle(x + 10, y + 5, 10);
    Utils.fillCircle(x, y - 10, 10);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();

}

function drawPike(x, y) {
    context.beginPath();
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x + 40, y + 20, x, y + 10);
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x - 40, y + 20, x, y + 10);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();
}

function drawDiamond(x, y) {
    context.beginPath();
    context.moveTo(x - 20, y);
    context.lineTo(x, y - 20);
    context.lineTo(x + 20, y);
    context.lineTo(x, y + 20);
    context.fill();
}