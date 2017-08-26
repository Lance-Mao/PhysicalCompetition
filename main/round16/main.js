'use strict';

function getFizzAndBuzz(num) {
    return (num % 5 === 0 && num % 3 === 0) ? "fizz buzz" : num % 3 === 0 ? "fizz" : num % 5 === 0 ? "buzz" : null;
}

module.exports = function main(num) {
    let fizzAndBuzz = '';
    for (let i = 1; i <= num; i++) {
        if (getFizzAndBuzz(i) != null) {
            fizzAndBuzz += getFizzAndBuzz(i) + ",";
        }
    }

    return fizzAndBuzz;
};
