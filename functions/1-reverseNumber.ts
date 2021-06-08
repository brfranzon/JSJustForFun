/** 1. Write a JavaScript function that reverse a number.**/
// Example x = 32243;
// Expected Output : 34223

const reverse = (N: number): number => {

    const nToString = N.toString();

    let reversedN = '';
    for (let i = nToString.length - 1; i >= 0; i--) {
        reversedN = reversedN + nToString[i];
    }

    return parseInt(reversedN);
}

const N: number = 32327912929;


/** second solution */

const reverse2 = (n: number): number => parseInt(N.toString().split("").reverse().join(''));


console.log(`x = ${N}`);
console.log(`Output = ${reverse(N)}`);
console.log(`Output = ${reverse2(N)}`);