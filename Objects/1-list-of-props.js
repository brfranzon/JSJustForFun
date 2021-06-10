// 1. Write a JavaScript program to list the properties of a JavaScript object
var myObj = {
    name: 'Bruno',
    surname: 'Franzon',
    age: 33,
    address: {
        street: 'Eschersheimer',
        number: 999
    },
    money: function () { return 100; }
};
var listOfProps = function (arg) {
    return Object.keys(arg);
};
var listOfProps1 = function (arg) {
    var myProps = [];
    for (var prop in arg) {
        if (arg.hasOwnProperty(prop))
            myProps.push(prop);
    }
    return myProps;
};
console.log(listOfProps(myObj));
console.log(listOfProps1(myObj));
