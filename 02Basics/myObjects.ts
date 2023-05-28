// Define a constant object representing a user with name, email, and isActive properties
const User = {
  name: "hitesh",
  email: "hitesh",
  isActive: true,
};

// Define a function that creates a user, taking a destructured object parameter with name (string) and isPaid (boolean) properties
function createUser1({ name: string, isPaid: boolean }) {}

// Call the createUser1 function with an object parameter
createUser1({ name: "noidhion", isPaid: false });

// Define a new object representing a user with name, isPaid, and email properties
let newUser = { name: "hitesh", isPaid: false, email: "A@fgmail" };

// Call the createUser1 function with the newUser object as a parameter
createUser1(newUser);

// Define a function createCourse that returns an object with name (string) and isPaid (boolean) properties
function createCourse(): { name: string; isPaid: boolean } {
  return { name: "react", isPaid: true };
}

// Define a type User with optional _id property, and required name, email, and isActive properties
type User = {
  readonly _id?: string;
  name: string;
  email: string;
  isActive: boolean;
};

// Define a type Mystring as an alias for string
type Mystring = string;

// Define a function createUser that takes a User parameter and returns a User object
function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

// Call the createUser function with an object parameter
createUser({ name: "", email: "", isActive: true });

// Define a User object with properties and assign it to myUser variable
let myUser: User = {
  _id: "1234",
  name: "nime",
  email: "h3",
  isActive: true,
};

// Update the email property of myUser
myUser.email = "ndn";

// Uncommenting the line below will result in a TypeScript error because _id property is readonly
// myUser._id = "dkjlfnlgj"

// Define a type cardNumber for card number
type cardNumber = {
  cardnumber: string;
};

// Define a type cardDate for card expiration date
type cardDate = {
  cardDate: string;
};

// Define a type cardDetails as an intersection of cardNumber, cardDate, and an object with cvv property of type number
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

// Export an empty object to ensure the file is treated as a module
export {};
