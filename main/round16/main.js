'use strict';
module.exports = function main(num) {
    return (num % 5 === 0 && num % 3 === 0) ? "fizz buzz" : num % 3 === 0 ? "fizz" : num % 5 === 0 ? "buzz" : "";
};
