function stopwatch() {
    let count = 0;
    return function () {
        count ++;
        return count;
    }   
}

const clock1 = stopwatch(); 
console.log(clock1()); //output: 1
console.log(clock1()); //output: 2
console.log(clock1()); //output: 3
console.log(clock1()); //output: 4
console.log(clock1()); //output: 5

//ekta function theke jodi r ekta function call kori tahole eita ekta close environment toiri kore fele 

//Call a function inside a function or return a function from another

//When you create an internal scope but can’t access from outside


