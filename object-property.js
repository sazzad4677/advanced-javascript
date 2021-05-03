const students = [
    {id: 20, name: "shahed"},
    {id: 21, name: "Sazzad"},
    {id: 22, name: "prionto"},
    {id: 23, name: "Mou"}

];
//without map
const output = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const sName = element.name;
    output.push(sName);
    
}
console.log(output); //output : [ 'shahed', 'Sazzad', 'prionto', 'Mou' ]

//with map
const names = students.map(s => s.name);
console.log(names); //output: [ 'shahed', 'Sazzad', 'prionto', 'Mou' ]

//filter out id which is bigger then 21
const ids = students.filter(s => s.id>21);
console.log(ids); //output: [ { id: 22, name: 'prionto' }, { id: 23, name: 'Mou' } ]

//find out id bigger then 21

const id21 = students.find(s => s.id>21);
console.log(id21); //output: { id: 22, name: 'prionto' }
