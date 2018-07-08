let chai = require('chai');
let jsdom = require('jsdom-global')();
let expect = require('chai').expect;
let $ = require('jquery');


function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}


describe('', function () {
    let targetHTML;
    beforeEach(() => {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        targetHTML = $('#target');
    });

    describe('', function () {
        it('With first invalid selector, should not change', function () {
            let selectorOne = 'invalid';
            let selectorTwo = $('.inside');
            let oldHTML = targetHTML.html();
            nuke(selectorOne, selectorTwo);
            expect(targetHTML.html()).to.equal(oldHTML);
        });

    it('With second invalid selector, should not change', function () {
        let selectorOne = $('.inside');
        let selectorTwo = 'invalid';
        let oldHTML = targetHTML.html();
        nuke(selectorOne, selectorTwo);
        expect(targetHTML.html()).to.equal(oldHTML);
    });
    it('', function () {
        let selector = $('.inside');
        let oldHTML = targetHTML.html();
        nuke(selector, selector);
        expect(targetHTML.html()).to.equal(oldHTML);
    });
    it('', function () {
        let selectorOne = $('.nested');
        let selectorTwo = $('.inside');
        let oldHTML = targetHTML.html();
        nuke(selectorOne, selectorTwo);
        expect(targetHTML.html()).to.equal(oldHTML);
    });
    it('', function () {
        let selectorOne = $('.nested');
        let selectorTwo = $('.target');
        let oldHTML = targetHTML.html();
        nuke(selectorOne, selectorTwo);
        expect(targetHTML.html()).to.not.equal(oldHTML);
    });
})

});