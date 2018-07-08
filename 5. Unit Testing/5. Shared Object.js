let chai = require('chai');
let jsdom = require('jsdom-global')();
let expect = require('chai').expect;
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe('sharedObject',function () {
    describe('Initial value tests', function () {
        it('Should be null', function () {
            expect(sharedObject.name).to.be.null;
            expect(sharedObject.income).to.be.null;
        });


    });

    describe('changeName tests', function () {
        it('Pass empty string (should not change)', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal(null, 'Name should not change');
        });
        it('Pass empty string with preexisting value (should not change)', function () {
            sharedObject.name = 'God';
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal('God', 'Name should not change');
        });
        it('Pass non-empty string (should change)', function () {
            sharedObject.changeName('Stich');
            expect(sharedObject.name).to.be.equal('Stich', 'Name should change');
        });
    });

    describe('changeName textbox tests', function () {
        it('Pass empty string (should not change textbox)', function () {
            let nameTxt = $('#name');
            sharedObject.changeName('');
            expect(nameTxt.val()).to.be.equal('Stich', 'Name should not change');
        });
        it('Pass non-empty string (should change)', function () {
            let nameTxt = $('#name');
            sharedObject.changeName('Vladi');
            expect(nameTxt.val()).to.be.equal('Vladi', 'Name should change');
        });
    });


    describe('changeIncome tests',function () {
        it('Pass negative number, should not change val',function () {
            sharedObject.changeIncome(-2);
            expect(sharedObject.income).to.be.null;
        });
        it('Pass positive then negative number, should not change val',function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-2);
            expect(sharedObject.income).to.be.equal(5);
        });
    });

    describe('changeIncome textbox tests',function () {
        it('Pass negative number, should not change textbox',function () {
            let incomeTxt = $('#income');
            sharedObject.changeIncome(-7);
            expect(incomeTxt.val()).to.be.equal('5');
        });

        it('Pass positive number, should change textbox',function () {
            let incomeTxt = $('#income');
            sharedObject.changeIncome(7);
            expect(incomeTxt.val()).to.be.equal('7');
        });


        it('Pass object inside should not change income', function () {
            sharedObject.changeIncome(33);
            let incomeTxt = $('#income');
            sharedObject.changeIncome({});
            expect(incomeTxt.val()).to.be.equal('33');
        });

        it('Pass floating-point should not change income', function () {
            sharedObject.changeIncome(33);
            let incomeTxt = $('#income');
            sharedObject.changeIncome(22.2);
            expect(incomeTxt.val()).to.be.equal('33');
        });

        it('Pass zero should not change income', function () {
            sharedObject.changeIncome(7);
            let incomeTxt = $('#income');
            sharedObject.changeIncome(0);
            expect(incomeTxt.val()).to.be.equal('7');
        });
    });
    
    describe('updateName',function () {
        it('Pass empty string (should not change)', function () {
            sharedObject.changeName('Victor');
            let nameTxt = $('#name');
            nameTxt.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Victor');
        });
        it('Pass non-empty string (should change)', function () {
            sharedObject.changeName('Smolski');
            let nameTxt = $('#name');
            nameTxt.val('Vladi');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Vladi');
        });
    });

    describe('updateIncome',function () {
        it('Pass string, should return old val',function () {
            let incomeTxt=$('#income');
            sharedObject.changeIncome('hi');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(7);
        });

        it('Pass object, should return old val',function () {
            let incomeTxt=$('#income');
            sharedObject.changeIncome({hi: 'yes'});
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(7);
        });

        it('Pass negative number, should do no change',function () {
            let incomeTxt=$('#income');
            sharedObject.changeIncome(-3);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(7);
        });

        it('Pass zero (should not change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11);
        });

        it('Pass a floating-point (should not change)', function () {
            sharedObject.changeIncome(11);
            let incomeTxt = $('#income');
            incomeTxt.val('22.2');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11);
        });

        it('Pass positive number, should change',function () {
            let incomeTxt=$('#income');
            sharedObject.changeIncome(9);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(9);
        });
    })
});