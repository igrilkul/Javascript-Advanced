let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven',function () {
    it('with a number parameter, should return undefined',function () {
        expect(isOddOrEven(13)).to.equal(undefined,
            "Function did not return the correct result!");
    });

    it('with a object parameter, should return undefined',function () {
        expect(isOddOrEven({name:"pesho"})).to.equal(undefined,
            "Function did not return the correct result!");
    });

    it('with an even length string, should return correct result',function () {
        assert.equal(isOddOrEven("roar"),
            "Function did not return the correct result!");
    });

    it('with an odd length string, should return correct result',function () {
        expect(isOddOrEven("pesho")).to.equal("odd",
            "Function did not return the correct result!");
    });

    it('with multiple consecutive checks, should return correct values',function () {
        expect(isOddOrEven("cat")).to.equal("odd",
            "Function did not return the correct result!");
        expect(isOddOrEven("alabala")).to.equal("odd",
            "Function did not return the correct result!");
        expect(isOddOrEven("is it even")).to.equal("even",
            "Function did not return the correct result!");
    })
})
