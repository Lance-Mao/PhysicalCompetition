'use strict';
const main = require("../../main/round15/main");

describe("将数组中所包含的某个元素找出，并放在数组后面", function(){

    it("拼接", function(){

        let arr = [0, 1, 0, 3, 12];
        let elem = 0;
        var result = main(arr,elem);
        var expect_string = [1, 3, 12, 0, 0];

        expect(expect_string).toEqual(result);
    });

});