// 3. Write a JavaScript program to get the length of a JavaScript object.

type Person = {
    name: string;
    sclass: string;
    rollno: number;
}

const person: Person = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

const lengthObj = (arg: Person) => {
    return Object.keys(arg).length;
}


console.log(lengthObj(person));