let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('LookupChar', function () {
    it('With a non-string first parameter, should return undefined',function () {
        expect(lookupChar(4,3)).to.equal(undefined,
            "Function did not return the correct result!");
    });

    it('With a non-number second parameter, should return undefined',function () {
        expect(lookupChar("crash","bash")).to.equal(undefined,
            "Function did not return the correct result!");
    });


    it('With a floating point parameter, should return undefined',function () {
        expect(lookupChar("pesho",3.14)).to.equal(undefined,
            "Function did not return the correct message!");
    });

    it('With a negative index, should return incorrect index',function () {
        expect(lookupChar("gosho",-1)).to.equal("Incorrect index",
            "The function did not return the correct value!");
    });

    it('With an incorrect index, should return incorrect index',function () {
        expect(lookupChar("gosho",14)).to.equal("Incorrect index",
            "The function did not return the correct value!");
    });

    it('With an index value equal to string length, should return incorrect index',function () {
        expect(lookupChar("gosho",5)).to.equal("Incorrect index",
            "The function did not return the correct value!");
    });

    it('with correct parameters, should return correct value',function () {
        expect(lookupChar("pesho",0)).to.equal('p',
            "The function did not return the correct result!");
    });

    it('with correct parameters, should return correct value',function () {
        expect(lookupChar("hyas",3)).to.equal('s',
            "The function did not return the correct result!");
    });
});