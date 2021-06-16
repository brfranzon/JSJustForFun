// 2. Write a JavaScript program to delete the rollno property from the following objec
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var student = {
    name: "Bruno Franzon",
    sclass: "3",
    rollno: 12
};
var deleteProp = function (arg) {
    console.log('before: ', arg);
    delete arg.rollno;
    console.log('after: ', arg);
};
// adding PROPERTIES INTO a object
var addProp = function (arg) {
    var _a, _b;
    console.log('before: ', arg);
    // data.key = value
    arg['newkey'] = 'new value';
    // or
    var argAdded1 = __assign(__assign({}, arg), (_a = {}, _a['newkey1'] = 'new value1', _a));
    // my favorite!
    var argAdded2 = __assign(__assign({}, arg), { newkey3: 'new value3' });
    console.log('after: ', arg);
    console.log('after: ', __assign(__assign({}, argAdded1), (_b = {}, _b['newkey2'] = 'new value2 overwritten', _b)));
    console.log('after: ', argAdded2);
};
// add a object into another
var user = {
    name: "Diego",
    age: 23
};
var newUser = __assign(__assign({}, user), { address: { city: "Toronto", country: "Canada" } });
console.log(deleteProp(student));
console.log(addProp(student));
console.log(newUser);
