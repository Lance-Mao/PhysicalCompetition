module.exports = function dimensionalityReduction(str, len, leftPadStr) {
    let newLeftPadStr = '';
    for (let i = 0; i < len; i++) newLeftPadStr += leftPadStr;

    return newLeftPadStr + str;
};

