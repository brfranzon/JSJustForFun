// 1. Write a JavaScript function to check whether an `input` is an array or not.
var myArray = [];
var mysArray = [];
var myNonArray = 'test';
var IsAnArray = function (arg) {
    return arg instanceof Array;
};
console.log(IsAnArray(myArray));
