//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

const Sprache = {
  en: 'english',
  fr: 'french',
  de: 'deutsch'
}

const data = {
  book1: {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    sprache: Sprache
  },
  book2: {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    sprache: Sprache
  },
  book3: {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    sprache: Sprache
  },
  book3: {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    sprache: Sprache
  }
}

const read1 = (arg) => {
  for (let book in data) {
    console.log(book)
    if (book) console.log(data[book].author, data[book].title, data[book].readingStatus, data[book].sprache);
  }
}

const read2 = (arg) => {
  Object.keys(arg).map(book => {
     console.log(arg[book].author)
  })
}

console.log(read2(data))
