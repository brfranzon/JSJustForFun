/** 1. Write a JavaScript function that reverse a number.**/
// Example x = 32243;
// Expected Output : 34223

function reverse<T>(arg: T) {

    const nToString = typeof (arg) === 'string' ? arg : arg.toString();

    let reversedN = '';
    for (let i = nToString.length - 1; i >= 0; i--) {
        reversedN = reversedN + nToString[i];
    }

    return reversedN;
}

//const N: number | string = 32327912929;
const N: number = 32327912929444;
const sN: string = '4351250912';



/** second solution */

const reverse2 = <T>(arg: T) => arg.toString().split("").reverse().join('');


console.log(`x = ${N}`);
console.log(`Output number 1 = ${reverse(N)}`);
console.log(`Output string 1 = ${reverse(sN)}`);

console.log(`Output number 2 = ${reverse2(N)}`);
console.log(`Output string 2 = ${reverse2(sN)}`);