function dimensionalityReduction(arr) {

    return ((arr+"").split()[0]).split(",").map(item => Number(item));
}

console.log(dimensionalityReduction( [4,[3,[2,[1]]]]))