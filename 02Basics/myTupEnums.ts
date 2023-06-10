// const user: (string | number)[] = [1, 'hc']
// This line declares a variable 'user' as an array that can contain elements of type string or number.
// The initial value of the array is [1, 'hc'].

let tUser: [string, number, boolean];
// This line declares a variable 'tUser' as a tuple that can contain three elements:
// the first element must be a string, the second element must be a number, and the third element must be a boolean.

tUser = ["hc", 4, true];
// This line assigns a value to 'tUser' where the first element is "hc", the second element is 4, and the third element is true.

let rgb: [number, number, number] = [233, 545, 645];
// This line declares a variable 'rgb' as a tuple that can contain three elements, all of which must be numbers.
// The initial value of 'rgb' is [233, 545, 645].

type User = [number, string];
// This line defines a type alias 'User' for a tuple that has two elements.
// The first element must be a number, and the second element must be a string.

const newUser: User = [32, "nfi"];
// This line declares a constant 'newUser' of type 'User' and assigns it a value of [32, "nfi"].
// The first element of 'newUser' is 32, and the second element is "nfi".

newUser[1] = "hc.vom";
// This line updates the second element of 'newUser' to the string "hc.vom".

// newUser.push(true);
// This line attempts to push a new element of type boolean, true, to the 'newUser' tuple.
// However, tuples in TypeScript have a fixed length and do not support the 'push' method.
// You will likely encounter a compilation error.
