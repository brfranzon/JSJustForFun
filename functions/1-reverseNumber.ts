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

const N: number = 3567;

console.log(`x = ${N}`);
console.log(`Output = ${reverse(N)}`);