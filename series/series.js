"use strict"

function findSequence(n) {
    let fibonacciSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 2] + fibonacciSeries[i - 1]);
    }

    return "斐波纳契数列第" + n + "数是：" + fibonacciSeries[n - 1];
}

console.log(findSequence(1000));