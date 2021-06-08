/** 1. Write a JavaScript function that reverse a number.**/
// Example x = 32243;
// Expected Output : 34223
var reverse = function (N) {
    var nToString = N.toString();
    var reversedN = '';
    for (var i = nToString.length - 1; i >= 0; i--) {
        reversedN = reversedN + nToString[i];
    }
    return parseInt(reversedN);
};
var N = 3567.65;
console.log("x = " + N);
console.log("Output = " + reverse(N));
