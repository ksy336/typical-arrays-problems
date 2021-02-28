
exports.min =  function min(array) {
    if (arguments.length == 0 || array.length == 0) return 0;
    return Math.min.apply(null, array);
}


exports.max = function max(array) {

    if (arguments.length == 0 || array.length == 0) return 0;
    return Math.max.apply(null, array);
}


exports.avg = function avg (array) {
    if (arguments.length == 0 || array.length == 0) return 0;
    let total = array.reduce(function (a, b) {
            return (a + b);
        });
    let average = total / array.length;
    return average;
}
