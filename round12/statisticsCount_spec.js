var statisticsCount = require("./statisticsCount");

describe("判断一个字符串中出现次数最多的字符，并统计次数", function(){

    it("最多的元素只有一个", function(){

        var result = statisticsCount("asssssadadasdsf");
        var expect_string = "{7:s}";

        expect(expect_string).to.equal(result);
    });


    it("测试用例校验码为0时", function(){

        var result = main('91523');
        var expect_string = '| |:|:: :::|| :|:|: ::|:| ::||: ||::: |';

        expect(expect_string).to.equal(result);
    });

});