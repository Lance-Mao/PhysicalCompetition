"use strict";

function queryTimes(arr, item) {

    return arr.filter((elem) => elem === item).length;
}

console.log(queryTimes([12, 4, 4, 4, 51, 23, 51, 4, 12, 23, 23], 4));