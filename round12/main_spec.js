'use strict';
const main = require("./main");

describe("判断一个字符串中出现次数最多的字符，并统计次数", function(){

    it("最多的元素只有一个", function(){

        var result = main("asssssadadasdsf");
        var expect_string = "{7:s}";

        expect(expect_string).toEqual(result);
    });
});