
    // function add(number) {
    //     sum+=number;
    //     return sum;
    // }

   let add = (function () {
        let total=0;

        return function sum(number) {
            total+=number;
            sum.toString =function() {
                return total
            };
            return sum
        }
    })();


console.log(add(1)(7));