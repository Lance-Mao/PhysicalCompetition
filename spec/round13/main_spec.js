'use strict';
const main = require("../../main/round13/main");

describe("数组降维", function(){

    it("数组中包含一个数组", function(){

        var result = main([1,2,[1,2]]);
        var expect_string = [1,2,1,2];

        expect(expect_string).toEqual(result);
    });

    it("数组中包含两个数组", function(){

        var result = main([1,2,[1,2],[3,40]]);
        var expect_string = [1,2,1,2,3,40];

        expect(expect_string).toEqual(result);
    });

    it("多维数组嵌套", function(){

        var result = main([4,[3,[2,[1]]]]);
        var expect_string = [4,3,2,1];

        expect(expect_string).toEqual(result);
    });
});