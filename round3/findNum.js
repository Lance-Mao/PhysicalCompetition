"use strict";

function findNum(arrayNum) {
    let oneTime = [1,2];
    for (let item of arrayNum) {
        if (arrayNum.includes(item)){
            console.log(123)
        }
    }
}

console.log(findNum([1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]))