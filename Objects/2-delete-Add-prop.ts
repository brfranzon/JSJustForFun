// 2. Write a JavaScript program to delete the rollno property from the following objec

type Student = {
    name: string,
    sclass: string,
    rollno: number;
}
const student: Student = {
    name: "Bruno Franzon",
    sclass: "3",
    rollno: 12
};


const deleteProp = (arg: Student): void => {
    console.log('before: ', arg);
    delete arg.rollno;
    console.log('after: ', arg);
}


// adding PROPERTIES INTO a object
const addProp = (arg: Student): void => {
    console.log('before: ', arg);

    // data.key = value
    arg['newkey'] = 'new value';

    // or
    const argAdded1 = { ...arg, ['newkey1']: 'new value1' }

    // my favorite!
    const argAdded2 = { ...arg, newkey3: 'new value3' }

    console.log('after: ', arg);
    console.log('after: ', { ...argAdded1, ['newkey2']: 'new value2 overwritten' });
    console.log('after: ', argAdded2);
}


// add a object into another
const user = {
    name: "Diego",
    age: 23
};

const newUser = { ...user, address: { city: "Toronto", country: "Canada" } }

console.log(deleteProp(student))
console.log(addProp(student))


console.log(newUser);