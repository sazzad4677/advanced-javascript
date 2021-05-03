//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const numbers = [8,9,10,11,12,13,14];
const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
    
// }
// function square(element) {
//     return element * element;
// }
// const square = element => element *element;
// const square = x => x*x;

// const result = numbers.map(x => x * x);

// console.log (result);

// const result = numbers.filter(x => x < 10);

const result = numbers.find(x => x < 10);
console.log (result);