//explicir types
var char;
var age;
var isloged;
age = 8;
//  age = "hf"
//  Type 'string' is not assignable to type 'number'.
// isloged = 9;
// Type 'number' is not assignable to type 'boolean'.
//arrays
var ninjas;
ninjas = ['yoshi', "manju"];
ninjas.push('shaun');
console.log(ninjas);
//union types
var mixed = [];
mixed.push("hi");
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = 12;
uid = "12";
var ninjaOne;
ninjaOne = {
    name: "nid",
    age: 20,
};
var ninjaTwo;
ninjaTwo = {
    name: "string",
    age: 9,
    belt: "string"
};
var message = "Hello World!";
// Calling 'message'
// message();
//  message.toLowerCase()
console.log(message.toLowerCase());
