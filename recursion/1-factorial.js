// 1. Write a JavaScript program to calculate the factorial of a number
// 5!  = 5.4.3.2.1 = 120
var factorial = function (arg) {

    let vector = [];
    for (i = arg; i > 0; i--) {
       vector.push(i);
    }

    const result = vector.reduce((acc, el) => {
        acc = acc * el
        return acc;
    }, 1)

    return result;
};

var N = 3;
console.log("Factorail of " + N + " is: " + factorial(N));
