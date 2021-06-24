//Write a simple JavaScript program to join all elements of the following array into a string. 
//Sample array : myColor = ["Red", "Green", "White", "Black"];
var joinElements = function (arg) {
    return arg.toString() || arg.join() || arg.join('+');
};
var inputArray = ['A', 44, 'BCD', 'EFG'];
console.log(joinElements(inputArray));
