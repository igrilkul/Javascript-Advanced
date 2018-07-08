function solve() {


    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(this.weight * this.melonSort.length);
            this.element='Water';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = Number(this.weight * this.melonSort.length);
            this.element='Fire';
        }

        get elementIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = Number(this.weight * this.melonSort.length);
            this.element='Earth';
        }

        get elementIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = Number(this.weight * this.melonSort.length);
            this.element='Air';
        }

        get elementIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.elements=['Fire','Earth','Air','Water'];
            this.element='Water';
            this.eIndex=0;
        }

        morph()
        {
            this.element=this.elements[this.eIndex++ % 4];
        }
    }

return{Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon};
}
