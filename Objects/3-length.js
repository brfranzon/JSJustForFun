// 3. Write a JavaScript program to get the length of a JavaScript object.
var person = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var lengthObj = function (arg) {
    return Object.keys(arg).length;
};
console.log(lengthObj(person));
