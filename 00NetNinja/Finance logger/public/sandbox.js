"use strict";
let greet;
greet = () => {
    console.log("first");
};
// greet = "hello"
const add = (a, b, c = 10) => {
    console.log(a + b + c);
};
add(3, 7, 89);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result = "some"
