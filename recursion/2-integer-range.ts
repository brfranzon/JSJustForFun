//2. Write a JavaScript program to get the integers in range (x, y)
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]

// n === m    n%2===0 && m%2===0    m > n   n+1 bis m

const IntRange = (n: number, m: number): number[] => {

    if (n % 2 !== 0 && m % 2 !== 0 && m <= n) return [null]

    const result: number[] = [];

    for (let i = n; i < m - 1; i++) {
        result.push(i + 1)
    }

    return result;

}

console.log(IntRange(6, 12))