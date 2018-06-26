let solution = (function () {

    function add() {
        let vec1=arguments[0];
        if(arguments.length===2){
            let vec2=arguments[1];
            return [vec1[0]+vec2[0],vec1[1]+vec2[1]];
        }
        else
            return vec1;
    }

    function multiply(vec1,scalar) {
        return [vec1[0]*scalar,vec1[1]*scalar];
    }

    function length(vec1) {
        return Math.sqrt(vec1[0]*vec1[0]+vec1[1]*vec1[1]);
    }

    function dot(vec1,vec2) {
        return vec1[0]*vec2[0]+vec1[1]*vec2[1];
    }

    function cross(vec1,vec2) {
        return vec1[0]*vec2[1]-vec2[0]*vec1[1];
    }

    return{
        add:add,
        multiply:multiply,
        length:length,
        dot:dot,
        cross:cross
    };
})();

console.log(solution.add([2,1],[3,2]));