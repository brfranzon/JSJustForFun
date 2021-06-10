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


const addProp = (arg: Student): void => {
    console.log('before: ', arg);

    // data.key = value
    arg['newkey'] = 'new value';

    // or
    const argAdded = { ...arg, ['newkey2']: 'new value2' }

    console.log('after: ', arg);
    console.log('after: ', { ...argAdded, ['newkey2']: 'new value2 overwritten' });

}

console.log(deleteProp(student))
console.log(addProp(student))