(function solve() {
    Array.prototype.last = function () {
        return this[this.length-1];
    };

    Array.prototype.skip = function (n) {
      if(n<=this.length && n>=0)
        return this.slice(n);
    };
    
    Array.prototype.take = function (n) {
        if(n<=this.length && n>0)
        return this.slice(0,n+1);
    };

    Array.prototype.sum = function () {
        let sum=0;
        for (let i = 0; i <this.length ; i++) {
            sum+=this[i];
        }
        return sum;
    };

    Array.prototype.average = function () {
        let sum=0;
        for (let i = 0; i <this.length ; i++) {
            sum+=this[i];
        }
        return sum/this.length;
    }
})();

let slave=['as I am','I suck','hell'];
console.log(slave.last());
