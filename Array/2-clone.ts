// 2. Write a JavaScript function to clone an array.

const array: number[] = [1, 23, -32];
const s_array: string[] = ['1', 'franzon', 'frankfurt'];

function clone<T>(arg: T[]): T[] {
    const array_clone: T[] = [...arg];
    return array_clone;
}


function clone2<T>(arg: T[]): T[] {
    return arg.slice(0);
}

console.log(clone(array));
console.log(clone(s_array));

console.log(clone2(array));
console.log(clone2(s_array));
