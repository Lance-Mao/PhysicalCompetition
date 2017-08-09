function demo1(num) {
    var numInitial = num;
    var decomposingFactors = "";
    var decomposingFactor = 1;

    while (decomposingFactor <= (num / 2)) {
        decomposingFactor++;
        while (num % decomposingFactor === 0) {
                num = num / decomposingFactor;
                decomposingFactors += decomposingFactor;
        }

    }
    decomposingFactors += num;

    return numInitial + "=" + decomposingFactors;
}

console.log(demo1(9000));
