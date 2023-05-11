"use strict";
// let  greet: Function
// greet = 2;
let greet;
greet = (name, greeting) => {
    console.log(`${name} say ${greeting}`);
};
console.log(greet);
let calc;
calc = (numOne, numTwo, action) => {
    if (action === '') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(3, 4, "void"));
// let logDetails: (obj: {name:string, age: number}) => void
// logDetails = (ninja : {
//     name: "nidhin",
//     age: 8
// }) => {
//     console.log(`${ninja.name} is ${ninja.age}`)
// }
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
logDetails({
    name: "nidhin",
    age: 9
});
