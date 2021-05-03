// "== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
//" === is used for comparing two variables, but this operator also checks datatype and compares two values.
const first = 3;
const second = 4;
if (first == second) {
    console.log("true");
} else {
    console.log("false"); //output is false
}

const third = 3;
const fourth = "3";
if (third == fourth) {
    console.log("true"); //output is true
} else {
    console.log("false"); 
}

if (third === fourth) {
    console.log("true"); 
} else {
    console.log("false"); //output is false
}
