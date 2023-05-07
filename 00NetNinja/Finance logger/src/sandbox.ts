type StringOrNum = string | number;
type objWithName = {
    name: string,
    uid: String
}

const logDetails = (uid: string | number , item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${name} says hello`)
}