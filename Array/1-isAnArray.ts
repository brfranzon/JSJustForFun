// 1. Write a JavaScript function to check whether an `input` is an array or not.


const myArray: number[] = [];
const mysArray: string[] = [];
const myNonArray: string = 'test';


const IsAnArray = (arg: number[]) => {
    return arg instanceof Array;
}

console.log(IsAnArray(myArray))