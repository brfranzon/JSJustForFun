//Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// a1 = 0
// a2 = 1
// an = an-1 + an-2
var fibonacci = function (n) {
    if (n === 1)
        return 0;
    if (n === 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(100));
