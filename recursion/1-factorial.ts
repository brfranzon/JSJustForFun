const factorial1 = (arg: number): number => {

    let vector: number[] = [];

    for (let i = arg; i > 0; i--) {
        vector.push(i);
    }

    const result = vector.reduce((acc, el) => { return acc * el }, 1);
    return result;
}

/** second solution */
const factorial2 = (n: number) => {
    if (n === 0) return 1
    return n * factorial2(n - 1);
}

console.log(factorial1(5));
console.log(factorial2(5));