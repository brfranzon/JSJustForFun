//1. Write a JavaScript program to test the first character of a string is uppercase or not.

const fn = (arg: string): boolean => {
    return arg.split('')[0] === arg.split('')[0].toUpperCase() ? true : false;
}


// with regex

const fn1 = (arg: string) => {
    const regex: RegExp = /^[A-Z]/
    console.log(regex.test(arg));
}

console.log(fn1('My String'));