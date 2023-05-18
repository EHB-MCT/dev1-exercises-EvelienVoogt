"use strict";

let numbers = [];

setup();

function setup() {
    for(let i = 0; i < 1000; i++) {
        numbers[i] = Math.random() * 100;
    }
    console.log(calculateAverage(numbers));
}

function calculateAverage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total / numbers.length;
}
