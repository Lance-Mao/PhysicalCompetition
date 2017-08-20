function repeatedElementsAndTimes(str) {
    let sortArr = str.split("").sort();
    return sortArr.map(item => {
        return sortArr.filter(elem => item === elem).length + ":" + item

    });

}

function statisticsCount(str) {

    let heavyElementsAndTimes = [...new Set(repeatedElementsAndTimes(str))].sort().reverse();

    let arrayStorage = heavyElementsAndTimes.filter(item => item.split(":")[0] === heavyElementsAndTimes[0].split(":")[0]).sort();

    return "{" + arrayStorage.toString() + "}";
}

console.log(statisticsCount("asssssadadasdsf"));