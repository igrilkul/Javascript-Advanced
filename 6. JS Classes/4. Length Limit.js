class Stringer {
    constructor(innerString,innerLength)
    {
        this.innerString=innerString;
        this.innerLength=innerLength;

        this.initialString=innerString;
        this.initialLength=innerLength;
    }

    increase(length)
    {
        this.innerLength+=length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(length)
    {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString()
    {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substr(0,this.innerLength) + '...';
        }
        else if (this.innerLength === 0) {
            return '...';
        }
        else {
            return this.innerString;
        }
    }
}

let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.innerLength);