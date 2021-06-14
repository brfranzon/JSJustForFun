//8.  Write a JavaScript function to check whether an object contains given property. 

const color = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
}

// 1 solution
const checkProp = (obj, prop) => obj != null && Object.keys(obj).filter(color => color === prop).length > 0;

//2 solution
const hasKey = (obj, key) => {
  return obj != null && hasOwnProperty.call(obj, key);
}

console.log(checkProp(color, 'red'));
console.log(hasKey({}, 'white'));