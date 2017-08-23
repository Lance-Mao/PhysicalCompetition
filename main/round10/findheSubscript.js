function findTheSubscript(arr,elem) {

    return arr.map((item,index) => {
        if (item === elem){
            return index;
        }
    }).filter(i => i !== undefined)

}

console.log(findTheSubscript([2,8,55,41,1,2,45,2,15,2],2))