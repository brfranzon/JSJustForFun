// 9. Write a JavaScript function to convert an object into a list of `[key, value]` pairs

const obj = {
  name: 'Bruno',
  stadt: 'Frankfurt',
  // lang: {
  //   pt: 'portugues',
  //   en: 'english',
  //   de: 'deutsch'
  // }
};

let array = [];
const arrayList = (obj) => {
  const arrayKey =  Object.keys(obj)//.map(k => array.push(k));
  const arrayValue =  Object.values(obj)

  return Object.keys(obj)
}

console.log(arrayList(obj));