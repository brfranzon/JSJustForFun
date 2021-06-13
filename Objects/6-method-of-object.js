// Write a JavaScript function to print all the methods in an JavaScript object

const obj = {
  name: 'Bruno',
  street: 'ESCHERSHEIMER',
  run: (params) => {
    console.log('I am running...')
  }
}

const findAllMethods = (arg) => console.log(Object.getOwnPropertyNames(arg).filter(prop => typeof arg[prop] === 'function'))


//console.log(findAllMethods(obj))
console.log(findAllMethods(Math))