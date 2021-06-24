// . Write a JavaScript program to find the most frequent item of an array. 
var mf = 1;
var m = 0;
var item;
var f = function (arg) {
    arg.map(function (index) {
        for (var j = index; j < arg.length; j++) {
            if (arg[index] === arg[j])
                m++;
            if (mf < m)
                mf = m, item = arg[index];
        }
        m = 0;
    });
    return "The item " + item + " -> " + mf + " times!";
};
console.log(f([1, 2, '4', 6, 6, 6, 6, 'test', 'test']));
