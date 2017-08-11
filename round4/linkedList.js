"use strict";

function linkedList(str,val) {
    let newStr = str.split('').filter(item => Number(item));
    let newString = newStr.filter(item => item % val !== 0)

    return newString.toString().replace(/,/g,'->');
}

console.log(linkedList('1->2->3->3->4->5->3',3))