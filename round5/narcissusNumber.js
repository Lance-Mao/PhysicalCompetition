"use strict"

function narcissusNumber() {

    let narcissusNumbers = [];

    for (let i = 100; i < 1000; i++) {
        if (Math.pow((i % 10),3) + Math.pow(((i % 100) > 10 ? parseInt(i % 100 / 10) : 0),3) + Math.pow(parseInt(i / 100),3) === i){
            narcissusNumbers.push(i);
        }
    }

    return narcissusNumbers;
}

console.log(narcissusNumber())