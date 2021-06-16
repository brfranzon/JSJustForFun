// 2. Write a JavaScript function to clone an array.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var array = [1, 23, -32];
var s_array = ['1', 'franzon', 'frankfurt'];
function clone(arg) {
    var array_clone = __spreadArrays(arg);
    return array_clone;
}
function clone2(arg) {
    return arg.slice(0);
}
console.log(clone(array));
console.log(clone(s_array));
console.log(clone2(array));
console.log(clone2(s_array));
