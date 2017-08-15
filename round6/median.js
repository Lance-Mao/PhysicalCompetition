"use strict"

function isMedian(array) {
    if (array.length % 2 === 0)
        return false;

    return true;
}

function findMedian(array) {

    array.sort((a, b) => a - b);
    if (isMedian(array))
        return array[(array.length - 1) / 2]

    return (array[array.length / 2 - 1] + array[array.length / 2])/2;
}

console.log(findMedian([5,6,8,4,12,58,21,0,12,4,556,52,1,12,2]))