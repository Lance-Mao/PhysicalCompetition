"use strict"
function demo1(num) {
    let numInitial = num;
    let decomposingFactors = "";
    let decomposingFactor = 1;

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

function a() {

}

console.log(demo1(9000));
