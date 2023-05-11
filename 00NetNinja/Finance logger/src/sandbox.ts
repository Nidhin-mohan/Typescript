// let  greet: Function

// greet = 2;

let greet : (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} say ${greeting}`)
}


console.log(greet)

let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === ''){
        return numOne+ numTwo
    } else {
        return numOne- numTwo
    }
}

console.log(calc(3,4,"void"))


// let logDetails: (obj: {name:string, age: number}) => void

// logDetails = (ninja : {
//     name: "nidhin",
//     age: 8
// }) => {
//     console.log(`${ninja.name} is ${ninja.age}`)
// }

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name : string, age : number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
}

logDetails({
    name: "nidhin",
    age: 9
})