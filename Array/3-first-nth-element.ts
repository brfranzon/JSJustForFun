//3 - Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array


const element = <T>(arg: T[], n?: number): any => {

    // first element, when n is not given
    if (n <= 0) return []

    if (!n) return arg.filter((el, index) => index === 0)

    // n-th elements
    return n > arg.length ?
        [`n = ${n} -> the array ist not so big. Try ${arg.length} :D`]
        : arg.filter((el, index) => index < n);


}


const myArray: number[] = [19, 2, -45, 76, 1, 2, -65];

console.log(element(myArray));
console.log(element(myArray, 3))