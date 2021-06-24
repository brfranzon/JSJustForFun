//Write a simple JavaScript program to join all elements of the following array into a string. 
//Sample array : myColor = ["Red", "Green", "White", "Black"];

type Input = (string | number)[];

const joinElements = (arg: Input): string => {
    return arg.toString() || arg.join() || arg.join('+');
}

const inputArray: Input = ['A', 44, 'BCD', 'EFG'];

console.log(joinElements(inputArray));