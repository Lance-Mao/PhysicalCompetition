'use strict';
const main = require("../../main/round16/main");

describe("将数组中所包含的某个元素找出，并放在数组后面", function(){

    it("被3整除", function(){
        var result = main(6);
        var expect_string = "fizz";
        expect(expect_string).toEqual(result);
    });
    it("被5整除", function(){
        var result = main(10);
        var expect_string = "buzz";
        expect(expect_string).toEqual(result);
    });
    it("被3整除", function(){
        var result = main(30);
        var expect_string = "fizz buzz";
        expect(expect_string).toEqual(result);
    });
    it("其他", function(){
        var result = main(31);
        var expect_string = "";
        expect(expect_string).toEqual(result);
    });

});