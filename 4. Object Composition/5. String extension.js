(function () {
    String.prototype.ensureStart=function (str) {
        if (!this.startsWith(str)) {
            return str+this.toString();
        }
        else return this.toString();
    };
    String.prototype.ensureEnd=function (str) {
            if(!this.endsWith(str))
            {
                return this.toString()+str;
            }
            else return this.toString();
        };

        String.prototype.isEmpty = function () {
            if(this.toString()==='')
            {
                return true;
            }
            else return false;
        };

        String.prototype.truncate = function (n) {
            let totalLength=this.length;

            if(totalLength<=n)
            {
                return this.toString();
            }
            else
            {
                let result=this.split(' ');
                if(result.length===1)
                {
                    let finalString = this.splice(0,n-3)+'...';
                }
                else
                {
                    while(totalLength>n-3)
                    {
                        totalLength-=(result[result.length-1].length+1);
                        result.pop();
                    }
                    let finalString=result.join(' ')+'...';
                    return finalString;
                }
            }
        };
        
        String.format = function (string,...params) {
            let regex=/{\d}/gm;
            let counter=0;

            let m;
            while ((m=regex.exec(string)) !== null && counter<params.length)
            {
               string=string.replace(m,params[counter]);
                counter++;
            }

            return string;
        }

})();

var testString = 'the quick brown fox jumps over the lazy dog';
//expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
//expect(testString.truncate(6)).to.equal('the...', 'Incorrect truncate() functionality');
console.log(testString.truncate(43));
//expect(testString.truncate(12)).to.equal('the quick...', 'Incorrect truncate() functionality');