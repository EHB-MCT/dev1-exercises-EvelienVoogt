"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let balloons = [];

setup();
update();

function setup() {
    for (let i = 0; i < 50; i++) {
        let balloon = {
            x: Utils.randomNumber(0, width),
            y: height,
            speed: Utils.randomNumber(1, 7),
            hue: Utils.randomNumber(0, 60),
            move: function(){
                this.x += Utils.randomNumber(-2, 2);
                this.y -= balloon.speed;
                drawBalloon(this.x, this.y, this.hue);
            }
        }
        balloons.push(balloon);
    }
}

function update(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < balloons.length; i++){
        balloons[i].move();
    }
    requestAnimationFrame(update);
}

function drawBalloon(x, y, hue) {
    context.fillStyle = "black";
    Utils.drawLine(x, y, x, y + 100);
    context.fillStyle = Utils.hsla(hue, 100, 50, 1.0);
    Utils.fillEllipse(x, y, 25, 50);
}