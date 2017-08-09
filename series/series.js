"use strict"

function findSequence(n) {
    let fibonacciSeries = [];
    fibonacciSeries.push(0);
    fibonacciSeries.push(1);
    for (let i = 2; i < n; i++) {
        fibonacciSeries.push(fibonacciSeries[i-2]+fibonacciSeries[i-1]);
    }
    return fibonacciSeries[n-1]
}

console.log(findSequence(10));