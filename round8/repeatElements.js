function findRepeatElements(arr) {

    return Array.from(new Set(arr.filter(item => (arr.filter(elem => item === elem).length > 1))));

}

console.log(findRepeatElements(['q','a','a','b','v','a','c','d','f','c']))