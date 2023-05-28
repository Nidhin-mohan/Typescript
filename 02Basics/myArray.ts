// Create an empty array to store superhero names
const superHeros: string[] = [];

// Create an empty array to store superhero power levels
// const heroPower: number[] = []
const heroPower: Array<number> = [];

// Define a type 'User' representing a user with name and isActive properties
type User = {
  name: string;
  isActive: boolean;
};

// Create an empty array to store user objects
const allUsers: User[] = [];

// Create a 2-dimensional array to store ML model values
const MLModels: number[][] = [
  [255, 255, 5343], // Array containing three numbers
  [8, 43], // Array containing two numbers
];

// Add a new user object to the 'allUsers' array
allUsers.push({ name: "", isActive: true });

// Add a superhero name to the 'superHeros' array
superHeros.push("nidhin");

// Add a power level to the 'heroPower' array
heroPower.push(4);
