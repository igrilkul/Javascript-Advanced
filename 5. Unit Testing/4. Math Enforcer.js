let expect = required('chai').expect;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('mathEnforcer',function () {
   describe('addFive',function () {
       it('With a non-number parameter, should return undefined',function () {
          expect(mathEnforcer.addFive('this is string')).to.be.undefined;
       });

       it('with a positive number, should return number + 5',function () {
           expect(mathEnforcer.addFive(6)).to.be.equal(11);
       });

       it('with a negative number, should return number + 5',function () {
           expect(mathEnforcer.addFive(-8)).to.be.equal(-3);
       });

       it('with a floating number, should return number + 5',function () {
           expect(mathEnforcer.addFive(5.53)).to.be.closeTo(10.53,0.01);
       });

       it('with a negative floating number, should return number + 5',function () {
           expect(mathEnforcer.addFive(-5.53)).to.be.closeTo(0.53,0.01);
       });
   });
   
   describe('subtractTen',function () {
       it('With a non-number parameter, should return undefined',function () {
           expect(mathEnforcer.subtractTen('this is string')).to.be.undefined;
       });

       it('with a positive number, should return number - 10',function () {
           expect(mathEnforcer.subtractTen(6)).to.be.equal(-4);
       });

       it('with a negative number, should return number - 10',function () {
           expect(mathEnforcer.subtractTen(-8)).to.be.equal(-18);
       });

       it('with a floating number, should return number - 10',function () {
           expect(mathEnforcer.subtractTen(5.53)).to.be.closeTo(-4.47,0.01);
       });

       it('with a negative floating number, should return number - 10',function () {
           expect(mathEnforcer.subtractTen(-5.53)).to.be.closeTo(-15.53,0.01);
       });
   });

   describe('sum',function () {
       it('With first non-number parameter, should return undefined',function () {
           expect(mathEnforcer.sum('a',3)).to.be.undefined;
       });

       it('With second non-number parameter, should return undefined',function () {
           expect(mathEnforcer.sum(3,'d')).to.be.undefined;
       });

       it('With both non-number parameters, should return undefined',function () {
           expect(mathEnforcer.sum('a','d')).to.be.undefined;
       });


       it('Their sum equals zero, should return correct value',function () {
           expect(mathEnforcer.sum(-5,5)).to.be.equal(0,
               "Function did not return correct value!");
       });

       it('with multiple consecutive checks, should return correct values',function () {
           expect(mathEnforcer.sum(3,5)).to.be.equal(8,
               "Function did not return correct value!");
           expect(mathEnforcer.sum(-5,2)).to.be.equal(-3,
               "Function did not return correct value!");
           expect(mathEnforcer.sum(0,5)).to.be.equal(5,
               "Function did not return correct value!");
       });

       it('With 1 floating number, should return correct value',function () {
           expect(mathEnforcer.sum(3.53,5)).to.be.closeTo(8.53,0.01,
               "Function did not return correct value!");
       });

       it('With 2 floating numbers, should return correct value',function () {
           expect(mathEnforcer.sum(3.53,5.04)).to.be.closeTo(8.57,0.01,
               "Function did not return correct value!");
       });
   })
});