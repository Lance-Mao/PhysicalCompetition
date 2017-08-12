"use strict";

function findNum(arrayNum) {
    for (let item of arrayNum) {
        if (arrayNum.filter(elem => elem === item).length === 1) {
            return item;
        }
    }
}

console.log(findNum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9]))