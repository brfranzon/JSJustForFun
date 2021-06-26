//1. Write a JavaScript program to test the first character of a string is uppercase or not.
var fn = function (arg) {
    return arg.split('')[0] === arg.split('')[0].toUpperCase() ? true : false;
};
// with regex
var fn1 = function (arg) {
    var regex = /^[A-Z]/;
    console.log(regex.test(arg));
};
console.log(fn1('My String'));
