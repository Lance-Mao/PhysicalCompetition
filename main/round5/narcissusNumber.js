"use strict"

function isNarcissusNumber(i) {
    if (Math.pow(getTheNumber(i,0), 3) + Math.pow(getTheNumber(i,1), 3) + Math.pow(getTheNumber(i,2), 3) === i)
        return i;
}

function getTheNumber(i,index){
    return (i + "").charAt(index);
}


function narcissusNumber() {

    let narcissusNumbers = [];

    for (let i = 100; i < 1000; i++) {
        if (isNarcissusNumber(i)) {
            narcissusNumbers.push(i);
        }
    }

    return narcissusNumbers;
}

console.log(narcissusNumber())


