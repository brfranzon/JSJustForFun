//3 - Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
var element = function (arg, n) {
    // first element, when n is not given
    if (n <= 0)
        return [];
    if (!n)
        return arg.filter(function (el, index) { return index === 0; });
    // n-th elements
    return n > arg.length ?
        ["n = " + n + " -> the array ist not so big. Try " + arg.length + " :D"]
        : arg.filter(function (el, index) { return index < n; });
};
var myArray = [19, 2, -45, 76, 1, 2, -65];
console.log(element(myArray));
console.log(element(myArray, 3));
