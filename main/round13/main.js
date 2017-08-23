module.exports = function dimensionalityReduction(arr) {

    return ((arr+"").split()[0]).split(",").map(item => Number(item));
}

