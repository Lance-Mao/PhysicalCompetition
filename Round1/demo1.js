function demo1(num) {
    var numInitial = num
    var decomposingFactors = [];
    var decomposingFactor = 1;

    while (decomposingFactor < (num / 2)) {
        decomposingFactor++;
        while (num % decomposingFactor === 0){
            if (num % decomposingFactor === 0) {
                num = num / decomposingFactor;
                decomposingFactors.push(decomposingFactor);
            }
        }

    }
    decomposingFactors.push(num)

    var factorsStr = "";
    for (var item of decomposingFactors){
        factorsStr += item;
    }

    return numInitial+"="+factorsStr;
}

console.log(demo1(90));
