function sortArray(arr,sortingMethod) {

    let ascendingSort = function (a,b) {
        return a - b;
    };

    let descendingSort = function (a,b) {
        return b - a;
    };

    let sortingMethods =
        {
            'asc': ascendingSort,
            'desc': descendingSort
        };

    return arr.sort(sortingMethods[sortingMethod]);
}