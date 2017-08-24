'use strict';
const main = require("../../main/round14/main");

describe("left-pad函数", function(){

    it("拼接", function(){

        var result = main('hello',20,'1');
        var expect_string = '11111111111111111111hello';

        expect(expect_string).toEqual(result);
    });

});