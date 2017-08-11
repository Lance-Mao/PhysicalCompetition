"use strict";

function linkedList(str) {
    let newStr = str.split('').filter(item => Number(item));
    let newString = newStr.filter(item => item % 3 !== 0)
    return newString.toString().replace(/,/g,'->');
}

console.log(linkedList('1->2->3->3->4->5->3'))