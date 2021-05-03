// jekono sonkha jodi zero badh a onno kichu hoy tahole true dhorbe, na hole false dhorbe jemon 

const age = 4;
if (age) {
    console.log("true"); //output true
}
else{
    console.log("false"); 
}

const age2 = 0;
if (age2) {
    console.log("true"); 
}
else{
    console.log("false"); //output false
}

//sob string true kintu empty string false

const name = "Sazzad";
if (name) {
    console.log("true"); //output true
}
else{
    console.log("false"); 
}

const name2 = "";
if (name2) {
    console.log("true"); 
}
else{
    console.log("false"); //output false
}

//je kono jinish er value jodi undefined hoy tahole false dhore nibe
let name3;
if (name3) {
    console.log("true"); 
}
else{
    console.log("false"); //output false
}

//je kono jinish er value jodi null hoy tahole false dhore nibe

let name4 = null;
if (name4) {
    console.log("true"); 
}
else{
    console.log("false"); //output false
}

//je kono jinish er value jodi NaN hoy tahole false dhore nibe

let name5 = NaN;
if (name5) {
    console.log("true"); 
}
else{
    console.log("false"); //output false
}