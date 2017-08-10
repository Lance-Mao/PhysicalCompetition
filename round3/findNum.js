"use strict"

function findNum(arrayNum) {
    for (let item of arrayNum) {
        let count = 0;
        for (let elem of arrayNum) {
            if (item === elem) {
                count++;
            }
        }

        if (count != 2) {
            return item;
        }
    }
}

console.log(findNum([1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]))