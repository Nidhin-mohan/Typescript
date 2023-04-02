// This function takes a number as input and returns the input value plus 2
function addTwo(num: number): number {
  //setting return type as number
  return num + 2;
  // return "hi"
}

// This function takes a string as input and returns the uppercase version of the string
function getUpper(val: string) {
  return val.toUpperCase();
}

// This function takes in a name (string), email (string), and a boolean flag indicating whether the user has paid (boolean)
// It logs a greeting message to the console with the input name
function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(` Hi ${name}`);
}

// This is a login function that takes in a name (string) and a boolean flag indicating whether the user has paid (boolean).
// The default value of the flag is set to false.
let loginUser = (name: string, isPaid: boolean = false) => {};

// This calls the loginUser function with the name "n" and the default value for the isPaid flag.
loginUser("n");

// This calls the signUpUser function with the name "Nidhin", email "nidhin@gmail", and a true value for the isPaid flag.
signUpUser("Nidhin", "nidhin@gmail", true);

// This calls the addTwo function with an input value of 5.
addTwo(5);

// This calls the getUpper function with the input string "hey"
getUpper("hey");

// This is a better way to write a function.
// This function takes a string input and returns a string output.
// The function checks if the input value is greater than 5, and if so, returns a boolean true value.
// If the input value is less than or equal to 5, the function returns the string "200 ok".
// Commenting this out because this function is not used anywhere in the code.
// function getValue(myVal : number) : string{
//     if(myVal > 5 ){
//         return true
//     }
//     return "200 ok"
// }

// This is a constant variable that is assigned a function that takes a string input and returns the string "hello".
const getHello = (s: string): string => {
  return "hello";
};

// This is an array of strings that contains the names of some superheroes.
const heros = ["batman", "homelander", "eren"];

// This uses the map function to iterate through the heros array.
// For each element in the array, the function returns a string that says "hero is" followed by the hero name.
heros.map((hero): string => {
  return `hero is ${hero}`;
});

// This function takes in an error message (string) and logs the message to the console.
function consoleError(errMsg: string): void {
  console.log(errMsg);
}

// This function takes in an error message (string) and throws a new Error object with the message as its argument.
// The return type of this function is set to "never", which indicates that the function does not return any value.
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

// This is an export statement to prevent the "no exports found" TypeScript error.
// This is empty because there are no exports in this file.
export {};
