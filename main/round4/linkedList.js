"use strict";

function linkedList(str,val) {
    let newStr = str.split('').filter(item => Number(item));
    let newString = newStr.filter(item => item != val );


    return newString.join('->');


}

console.log(linkedList('1->2->3->3->4->5->3',3))

// return str.replace('/->'+val+'/g','')
// let vr = new RegExp("/->"+val,"/g")
//
// return str.replace(vr,"");