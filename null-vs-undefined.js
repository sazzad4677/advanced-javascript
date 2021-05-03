// 1st way
let name;
console.log(name); //output undefined

//2nd way (if function is declared but no return from the function)
function add (num1, num2){
    console.log(num1+num2);
    return; 
}
//3rd way
function add2 (num2, num3){
    console.log(num2,num3); //output undefined
    return; 
}
const result = add2 (10);
console.log(result); //output undefined

//4th way (no object present)

const student ={name:"Sazzad", phone: "01679436054"};
console.log(student.id); // output undefined

//5th way value set to undefined
const fun = undefined;
console.log(fun); //output undefined

// Null: The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations