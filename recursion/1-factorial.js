var factorial1 = function (arg) {
    var vector = [];
    for (var i = arg; i > 0; i--) {
        vector.push(i);
    }
    var result = vector.reduce(function (acc, el) { return acc * el; }, 1);
    return result;
};
/** second solution */
var factorial2 = function (n) {
    if (n === 0)
        return 1;
    return n * factorial2(n - 1);
};
console.log(factorial1(5));
console.log(factorial2(5));
