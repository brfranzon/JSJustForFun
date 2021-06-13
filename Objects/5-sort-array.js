// 5. Write a JavaScript program to sort an array of JavaScript objects.

const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];


// First solution - MODERN
const sortModern = (arg) => {
    return arg.sort(function (a, b) { return a.libraryID > b.libraryID ? -1 : 1 })
}


console.log(sortModern(library))