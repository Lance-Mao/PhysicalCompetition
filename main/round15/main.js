'use strict';
module.exports = function main(arr, elem) {
    let len = arr.toString().split(elem).length - 1;

    let newArr = arr.filter(item => item !== elem);

    for (let i = 0; i < len; i++) {
        newArr.push(elem);
    }

    return newArr;
};
