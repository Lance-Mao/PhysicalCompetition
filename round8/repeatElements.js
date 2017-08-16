function findRepeatElements(arr) {

    let repeat = new Set(arr.filter(item => (arr.filter(elem => item === elem).length > 1)));

    return repeat;
}

console.log(findRepeatElements(['q','a','a','b','v','a','c','d','f','c']))