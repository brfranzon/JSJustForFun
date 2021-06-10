// 1. Write a JavaScript program to list the properties of a JavaScript object

type MyObj = {
    name: string;
    surname: string;
    age: number,
    address: {
        street: string;
        number: number;
    },
    money: (param: number) => number;
}
const myObj: MyObj = {
    name: 'Bruno',
    surname: 'Franzon',
    age: 33,
    address: {
        street: 'Eschersheimer',
        number: 999
    },
    money: () => { return 100 }
}


const listOfProps = (arg: MyObj) => {
    return Object.keys(arg);
}


const listOfProps1 = (arg: MyObj) => {

    const myProps: any[] = [];

    for (let prop in arg) {
        if (arg.hasOwnProperty(prop)) myProps.push(prop);
    }

    return myProps;
}

console.log(listOfProps(myObj))
console.log(listOfProps1(myObj))


