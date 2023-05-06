//explicir types
 let char : string;
 let age : number;
 let isloged : boolean;

 age = 8;
//  age = "hf"
//  Type 'string' is not assignable to type 'number'.

// isloged = 9;
// Type 'number' is not assignable to type 'boolean'.

//arrays
let ninjas : string[] 

ninjas = ['yoshi', "manju"]

ninjas.push('shaun');

console.log(ninjas)

//union types

let mixed: (string | number | boolean)[]  =[];

mixed.push("hi")
mixed.push(20);
mixed.push(false);

console.log(mixed);


let uid: string| number;

uid = 12;
uid = "12";


let ninjaOne : object;
ninjaOne = {
    name: "nid",
    age: 20,
}
 let ninjaTwo :{
    name: string,
    age: number,
    belt :string ;
 } 

 ninjaTwo = {
    name: "string",
    age: 9,
    belt :"string" ;
 }



 const message = "Hello World!";
 // Calling 'message'
// message();


//  message.toLowerCase()

 console.log(message.toLowerCase())